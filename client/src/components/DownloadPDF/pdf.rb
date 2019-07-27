require 'rubygems' 
require 'prawn'

# pdf = Prawn::Document.new
# pdf.text "Hello World"
# puts pdf.render_file "assignment.pdf"

pdf = Prawn::Document.new
pdf.text "Hello World"
puts pdf.render

puts "Hello world"