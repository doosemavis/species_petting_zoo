class GenusController < ApplicationController
  before_action :set_genu, only: [:show, :update, :destroy]

  # GET /genus
  def index
    @genus = Genu.all

    render json: @genus
  end

  # GET /genus/1
  def show
    render json: @genu
  end

  # POST /genus
  def create
    @genu = Genu.new(genu_params)

    if @genu.save
      render json: @genu, status: :created, location: @genu
    else
      render json: @genu.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /genus/1
  def update
    if @genu.update(genu_params)
      render json: @genu
    else
      render json: @genu.errors, status: :unprocessable_entity
    end
  end

  # DELETE /genus/1
  def destroy
    @genu.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_genu
      @genu = Genu.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def genu_params
      params.fetch(:genu, {})
    end
end
