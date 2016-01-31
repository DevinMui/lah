class LinksController < ApplicationController
	def index
		@links = Link.all
		render json: @links
	end
	def create
		@link = Link.create(answer_id: params[:answer_id],
		                     question_id: params[:question_id],
		                     number: params[:number],
		                     archive: params[:archive])
		if @link.save
			render json: @link, status: 201
		else
			render json: "fu", status: 422
		end
	end
	def find_post
		@link = Link.where(answer_id: params[:answer_id], number: params[:number]).all
		render json: @link, status: 200
	end
end
