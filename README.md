# GTA_Globe
This 3D globe shows the frequency of documented terrorist attacks on the Global Terrorism Database between 2012 and 2014 using WebGL Globe. This data was first acquired from the GTD compiled by the University of Maryland - College Park. I downloaded the data in excel format, omitted unnecessary data, and exported as a JSON file. Since the data from the JSON file is not the same format as the one the Globe receives data, I wrote a JS program (Inside "Conversion Program") to gather all repeated latitude/longitudes by year and set it as the length (magnitude) of the line on the actual globe. (The rounding factor of longitude/latitude as well as the scale factor of the data set (line height) can be adjusted as well in this program) The colors of the line is determined by the length of each line through statistical normalization (longer line - darker color, shorter line - lighter). Red, grey, and black were chosen as the dominant colors since that better reflects the violence of the topic (terrorism). Lastly, I used Photoshop to create a globe image.


Created by Yu-Lin Yang

yyang0087@gmail.com

yang423@wisc.edu

University of Wisconsin - Madison

Built for Capital One's "Build a fun geographic data visualization" challenge.

