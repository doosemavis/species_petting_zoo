class SpeciesController < ApplicationController
  before_action :set_species, only: [:show, :update, :destroy]

  # GET /species
  def index
    @species = Specie.all

    render json: @species
  end

  # GET /species/1
  def show
    render json: @species
  end

  # POST /species
  def create
    @species = Specie.new(species_params)

    if @species.save
      render json: @species, status: :created, location: @species
    else
      render json: @species.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /species/1
  def update
    if @species.update(species_params)
      render json: @species
    else
      render json: @species.errors, status: :unprocessable_entity
    end
  end

  # DELETE /species/1
  def destroy
    @species.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_species
      @species = Specie.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def species_params
      params.fetch(:species, {})
    end
end
