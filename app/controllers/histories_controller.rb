class HistoriesController < ApplicationController
  before_action :set_history, only: [:show]
  def index
    @histories = History.where(user:params[:user])
    render json: @histories
  end

  def show 
    render json: @history
  end

  def create 
    @history = History.new(history_params)
    respond_to do |format|
      if @history.save
        format.html { redirect_to @history, notice: 'history was successfully created.' }
        format.json { render :show, status: :created, location: @history }
      else
        format.html { render :new }
        format.json { render json: @history.errors, status: :unprocessable_entity }
      end
    end
  end 

  private

  def set_history
    @history = History.find(params[:id])
  end
  def history_params
    params.require(:history).permit(:user, :item_id,:quantity)
  end
end
