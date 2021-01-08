class AnimalSerializer < ActiveModel::Serializer
    attributes :id, :name, :layman, :age, :extinct
    belongs_to :category
end 