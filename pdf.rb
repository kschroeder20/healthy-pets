require 'rubygems' 
require 'prawn'

pdf = Prawn::Document.new
pdf.text "Hello World 2"
puts pdf.render