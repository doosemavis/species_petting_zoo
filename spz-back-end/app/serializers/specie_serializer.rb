class SpeciesSerializer < ActiveModel::Serializer
    attributes :id, :name, :age
    belongs_to :genu
end 