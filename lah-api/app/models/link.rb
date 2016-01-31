class Link < ActiveRecord::Base
	validates :answer_id, uniqueness: { scope: [:number] }
end
