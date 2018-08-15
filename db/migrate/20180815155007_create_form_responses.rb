class CreateFormResponses < ActiveRecord::Migration[5.2]
  def change
    create_table :form_responses do |t|
      t.text :content
      t.references :form, foreign_key: true

      t.timestamps
    end
  end
end
