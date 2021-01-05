class AnimalSerializer < ActiveModel::Serializer
    attributes :id, :name, :age
    belongs_to :category
end 