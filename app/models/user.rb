class User < ApplicationRecord
  has_secure_password

  validates :email, :session_token, presence: true, uniqueness: true
  validates :email, length: { in: 3..255 }, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { in: 6..255 }, allow_nil: true

  before_validation :ensure_session_token

  has_many :reservations, dependent: :destroy
  has_many :reports
  
  def self.find_by_credentials(email, password)
    @user = User.find_by email: email

    if @user
      @user.authenticate(password)
    else
      return false
    end
  end

  def reset_session_token!
    self.update!(session_token: generate_unique_session_token)    
    self.session_token
  end

  private

  def generate_unique_session_token
    loop do
      session_token = SecureRandom.urlsafe_base64
      return session_token unless User.exists?(:session_token == session_token)
    end

    # in a loop:
      # use SecureRandom.base64 to generate a random token
      # use `User.exists?` to check if this `session_token` is already in use
      # if already in use, continue the loop, generating a new token
      # if not in use, return the token
  end

  def ensure_session_token
    self.session_token ||= generate_unique_session_token
    # if `self.session_token` is already present, leave it be
    # if `self.session_token` is nil, set it to `generate_unique_session_token`
  end
end
