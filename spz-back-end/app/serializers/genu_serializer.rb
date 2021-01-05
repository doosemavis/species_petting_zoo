class GenuSerializer < ActiveModel::Serializer
    attributes :id, :name
    has_many :species
end