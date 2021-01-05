class SpecieSerializer < ActiveModel::Serializer
    attributes :id, :name, :age
    belongs_to :genu
end 