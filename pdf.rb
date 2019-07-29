require 'rubygems' 
require 'prawn'

pdf = Prawn::Document.new

# Prawn::Document.generate("hello.pdf") do
#     text "Hello World!"
#   end

# File.open('pdfInfo.txt').each do |line|
#     pdf.text line
#     puts pdf.render
#     pdf.move_down 20
# end

Prawn::Document.generate("test.pdf") do |pdf|
    File.open('pdfInfo.txt').each do |line|
        pdf.text line
    end
   end

