class PagesController < ApplicationController
  def about
    @page_title = "About Sea Battle"
  end

  def howto
    @page_title = "How to Play Sea Battle"
  end

  def game
    @page_title = "New Sea Battle Game"
  end
end
