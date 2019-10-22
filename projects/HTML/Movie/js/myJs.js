$( (function() {
	$.ajax({
		url:"a2.xml",
		data:{},
		type:"GET", 
		dataType:"xml",
		success: function(data) {

			//index.html
			var header1 = $(data).find('title').text();
			var name = $(data).find('studentName').text();
			var prog = $(data).find('student').attr('studentProg');
			var num = $(data).find('student').attr('studentNumber');
			
			var m1 = $(data).find('movieName:eq(0)').text();
			var m2 = $(data).find('movieName:eq(1)').text();
			var m3 = $(data).find('movieName:eq(2)').text();
			
			$('#header1').append(header1);
			$('#footer1').append(name + ' | ' + num + ' | ' + prog);
			
			$('#m1').append(m1);
			$('#m2').append(m2);
			$('#m3').append(m3);
			
			//page2
			var header2 = $(data).find('movieName:eq(0)').text();
			var url2 = $(data).find('movieName:eq(0)').attr('image');
			var html2 = '<img class = "center" src = "' + url2 + '" /><br>';
			var desc2 = $(data).find('movieDesc:eq(0)').text();
			
			var acast1 = $(data).find('cast:eq(0)').text();
			var acast2 = $(data).find('cast:eq(1)').text();
			var acast3 = $(data).find('cast:eq(2)').text();

			var arevName1 = $(data).find('reviewName:eq(0)').text();
			var arevDesc1 = $(data).find('reviewDesc:eq(0)').text();
			var arevName2 = $(data).find('reviewName:eq(1)').text();
			var arevDesc2 = $(data).find('reviewDesc:eq(1)').text();
			var arevName3 = $(data).find('reviewName:eq(2)').text();
			var arevDesc3 = $(data).find('reviewDesc:eq(2)').text();
			
			$('#desc2').append(desc2);
			$('#cast2').append(acast1);
			$('#cast2').append("<br>" + acast2);
			$('#cast2').append("<br>" + acast3);
			
			$('#review2').append("<b>" + arevName1 + "</b>" + " says: " + arevDesc1);
			$('#review2').append("<br><b>" + arevName2 + "</b>" + " says: " + arevDesc2);
			$('#review2').append("<br><b>" + arevName3 + "</b>" + " says: " + arevDesc3);
			
			$('#header2').append(header2);
			$('#main2').prepend(html2);
			$('#footer2').append(name + ' | ' + num + ' | ' + prog);
			
			//page3
			var header3 = $(data).find('movieName:eq(1)').text();
			var url3 = $(data).find('movieName:eq(1)').attr('image');
			var html3 = '<img class = "center" src = "' + url3 + '" /><br>';
			var desc3 = $(data).find('movieDesc:eq(1)').text();
			
			var bcast1 = $(data).find('cast:eq(3)').text();
			var bcast2 = $(data).find('cast:eq(4)').text();
			var bcast3 = $(data).find('cast:eq(5)').text();

			var brevName1 = $(data).find('reviewName:eq(3)').text();
			var brevDesc1 = $(data).find('reviewDesc:eq(3)').text();
			var brevName2 = $(data).find('reviewName:eq(4)').text();
			var brevDesc2 = $(data).find('reviewDesc:eq(4)').text();
			var brevName3 = $(data).find('reviewName:eq(5)').text();
			var brevDesc3 = $(data).find('reviewDesc:eq(5)').text();
			
			$('#desc3').append(desc3);
			$('#cast3').append(bcast1);
			$('#cast3').append("<br>" + bcast2);
			$('#cast3').append("<br>" + bcast3);
			
			$('#review3').append("<b>" + brevName1 + "</b>" + " says: " + brevDesc1);
			$('#review3').append("<br><b>" + brevName2 + "</b>" + " says: " + brevDesc2);
			$('#review3').append("<br><b>" + brevName3 + "</b>" + " says: " + brevDesc3);
			
			$('#header3').append(header3);
			$('#main3').prepend(html3);
			$('#footer3').append(name + ' | ' + num + ' | ' + prog);
			
			//page4
			var header4 = $(data).find('movieName:eq(2)').text();
			var url4 = $(data).find('movieName:eq(2)').attr('image');
			var html4 = '<img class = "center" src = "' + url4 + '" /><br>';
			var desc4 = $(data).find('movieDesc:eq(2)').text();
			
			var ccast1 = $(data).find('cast:eq(6)').text();
			var ccast2 = $(data).find('cast:eq(7)').text();
			var ccast3 = $(data).find('cast:eq(8)').text();

			var crevName1 = $(data).find('reviewName:eq(6)').text();
			var crevDesc1 = $(data).find('reviewDesc:eq(6)').text();
			var crevName2 = $(data).find('reviewName:eq(7)').text();
			var crevDesc2 = $(data).find('reviewDesc:eq(7)').text();
			var crevName3 = $(data).find('reviewName:eq(8)').text();
			var crevDesc3 = $(data).find('reviewDesc:eq(8)').text();
			
			$('#desc4').append(desc4);
			$('#cast4').append(ccast1);
			$('#cast4').append("<br>" + ccast2);
			$('#cast4').append("<br>" + ccast3);
			
			$('#review4').append("<b>" + crevName1 + "</b>" + " says: " + crevDesc1);
			$('#review4').append("<br><b>" + crevName2 + "</b>" + " says: " + crevDesc2);
			$('#review4').append("<br><b>" + crevName3 + "</b>" + " says: " + crevDesc3);
			
			$('#header4').append(header4);
			$('#main4').prepend(html4);
			$('#footer4').append(name + ' | ' + num + ' | ' + prog);
			
			
		}
	})
}));