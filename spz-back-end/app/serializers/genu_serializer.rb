class GenusSerializer < ActiveModel::Serializer
    attributes :name
    has_many :species
end    