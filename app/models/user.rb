# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  first_name      :string           not null
#  last_name       :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  birth_date      :date             not null
#  city            :string           not null
#  description     :string           not null
#

class User < ApplicationRecord
  validates_presence_of :first_name, :last_name, :email, :message => "is required."
  validates :password_digest, :session_token, presence: true
  validates :email, uniqueness: true
  validates :password, length: {minimum: 8, allow_nil: true}
  validate :old_enough?, :valid_email?
  

  attr_reader :password
  after_initialize :ensure_session_token

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user && user.is_password?(password)
    user
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  private 

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def old_enough?
    if self.birth_date.class != Date
      return self.errors[:base] << "Select your birth date to continue."
    end

    now = Time.now.utc.to_date
    age = now.year - self.birth_date.year - ((now.month > self.birth_date.month || (now.month == self.birth_date.month && now.day >= self.birth_date.day)) ? 0 : 1)
    if age < 18
       self.errors[:base] << "Sorry you must be over 18 to signup."
    end
  end

  def valid_email?
    if self.email != ""
      email_split = self.email.split("@")
        if email_split.length != 2 || email_split[1].split(".").length != 2
           self.errors[:base] << "Enter a valid email."
        end
    end
  end
end
