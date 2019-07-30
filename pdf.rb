require 'rubygems' 
require 'prawn'

pdf = Prawn::Document.new

Prawn::Document.generate("petInfo.pdf") do |pdf|
    File.open('pdfInfo.txt').each do |line|
        pdf.text line
    end
   end

