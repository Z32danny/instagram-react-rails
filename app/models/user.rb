class User < ApplicationRecord
    has_secure_password

    has_many :posts, dependent: :destroy

    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :email, uniqueness: true, presence: true
    validates :password_digest, presence: true, length: { minimum: 7 }
end
