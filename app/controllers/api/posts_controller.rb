module Api
    class PostsController < ApplicationController
        before_action :set_post, only: [:show, :destroy]

        # GET /posts/1
        def show
            render json: @post
        end

        # GET /posts
        def index
            @posts = Post.all

            render json: @posts
        end
        
        def create
            @post = Post.create(post_params)

            if @post.save
                render json: @post, status: :created
            else
                render json: @post.errors, status: :unprocessable_entity
            end
        end

        # DELETE /posts/1
        def destroy
            @post.destroy
        end

        private

        def set_post
            @post = Post.find_by(id: params[:id])
        end

        def post_params
            params.require(:post).permit(:description, :image, :user_id)
        end
    end
end
