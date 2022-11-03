json.set! @user.id do
    json.extract! @user, :fullname, :company, :email
end