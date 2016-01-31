class AddLimit < ActiveRecord::Migration
  def change
  	change_column :links, :archive, :text, limit: 429496729
  end
end
