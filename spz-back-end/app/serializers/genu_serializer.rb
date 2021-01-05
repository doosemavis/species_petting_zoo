class GenuSerializer < ActiveModel::Serializer
    attributes :name
    has_many :species
end    