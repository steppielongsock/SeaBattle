require 'test_helper'

class PagesControllerTest < ActionDispatch::IntegrationTest
  test "should get about" do
    get pages_about_url
    assert_response :success
  end

  test "should get howto" do
    get pages_howto_url
    assert_response :success
  end

  test "should get game" do
    get pages_game_url
    assert_response :success
  end

end
