class WellnessActivity < ApplicationRecord
  belongs_to :wellness_group, required: false
  belongs_to :category, required: false
  has_and_belongs_to_many :users

  def self.format_date_times(date, time)
    d = date.to_date
    t = time.to_time
    date_time = DateTime.new(d.year, d.month, d.day, t.hour, t.min)
  end

end
