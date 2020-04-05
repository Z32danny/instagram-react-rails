class PostSerializer < ActiveModel::Serializer
  attributes :id, :description, :user_id
end
