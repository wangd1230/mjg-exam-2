// var Bmob = require('app.js');
Bmob.initialize('692f105759896ec5','123456');

var form = document.querySelector('.form');
var block = document.querySelector('.block');
var question = document.querySelector('.qu');
var sum = 0;
// var w = 0;
// var d = 0;
// var h = document.querySelector('h4');
		// h.innerHTML = 'ddd'
function Exam(id,question,a1,a2,a3,a4,r){
	this.id = id;
	this.question = question;
	this.a1 = a1;
	this.a2 = a2;
	this.a3 = a3;
	this.a4 = a4;
	this.r = r;
}
function Exam1(id,question,a1,a2,r){
	this.id = id;
	this.question = question;
	this.a1 = a1;
	this.a2 = a2;
	this.r = r;
}
var t = [];
var w = [];
const query = Bmob.Query('question1');
query.find().then(res =>{
	// console.log(res[0].a1);
	// console.log(res.length);
	var p1 = document.createElement('p');
	p1.innerHTML = '一、选择题';
	form.appendChild(p1);
	// var p2 = document.createElement('p');
	for (var i = 0; i < res.length; i++) {
		t[i] = new Exam(res[i].id,res[i].question,res[i].a1,res[i].a2,res[i].a3,res[i].a4,res[i].r);
		// return t[i];
	}
	// console.log(t[0]);
	// console.log(t[1]);
	for (var i = 0; i < t.length; i++) {
		var block = document.createElement('div');
		// block.setAttribute('class','radio')
		// block.style.display = 'flex';
		block.setAttribute('class','form-group');
		var h4 = document.createElement('label');
		h4.innerHTML =  t[i].id +'、'+ t[i].question;
		form.appendChild(block);
		block.appendChild(h4);
		var box = document.createElement('div');
		box.setAttribute('class','box');
		// box.style.display = 'flex';
		// box.style.justifyContent = 'spaceAround';
		block.appendChild(box);
		// console.log(i);
		for (var k = 0; k < 4; k++) {
			var m = [t[i].a1,t[i].a2,t[i].a3,t[i].a4]
			var input = document.createElement('input');
			input.setAttribute('type','radio');
			input.setAttribute('name',t[i].id);
			input.setAttribute('value',m[k]);
		    var label = document.createElement('label');
		    // label.innerHTML = m[k];
		    // label.setAttribute('class','radio-inline');
		    
		    var little = document.createElement('div');
		    little.setAttribute('class','radio');
		    // box.setAttribute('class','radio-inline');
		    box.appendChild(little);
			// little.appendChild(input);
			var insertText = document.createTextNode(m[k]);
			little.appendChild(label);
			label.appendChild(input);
			label.appendChild(insertText);
			// label.innerHTML = m[k];

		}
		
	}
	
 //    const query = Bmob.Query('tableName');
	// 	query.set("name","Bmob")
	// 	query.set("cover","后端云")
	// 	query.save().then(res => {
 //  			console.log(res)
	// 	}).catch(err => {
 //  		console.log(err)
	// })
	// w = 1;
	const query1 = Bmob.Query('judge1');
    query1.find().then(res =>{
		// console.log(res[0].a1);
		// console.log(res.length);
		var p2 = document.createElement('p');
		p2.innerHTML = '二、判断题';
		form.appendChild(p2);
		for (var i = 0; i < res.length; i++) {
			w[i] = new Exam1(res[i].id,res[i].question,res[i].a1,res[i].a2,res[i].r);
		// return t[i];
		}
	console.log(w[0]);
	console.log(w[99]);
	for (var i = 0; i < w.length; i++) {
		var block = document.createElement('div');
		// block.setAttribute('class','radio')
		// block.style.display = 'flex';
		block.setAttribute('class','form-group');
		var h4 = document.createElement('label');
		h4.innerHTML =  w[i].id +'、'+ w[i].question;
		form.appendChild(block);
		block.appendChild(h4);
		var box = document.createElement('div');
		box.setAttribute('class','box');
		// box.style.display = 'flex';
		// box.style.justifyContent = 'spaceAround';
		block.appendChild(box);
		// console.log(i);
		for (var k = 0; k < 2; k++) {
			var m = [w[i].a1,w[i].a2]
			var input = document.createElement('input');
			input.setAttribute('type','radio');
			var c = i + 101;
			// console.log(c);
			input.setAttribute('name',c);
			input.setAttribute('value',m[k]);
		    var label = document.createElement('label');
		    // label.innerHTML = m[k];
		    // label.setAttribute('class','radio-inline');
		    
		    var little = document.createElement('div');
		    little.setAttribute('class','radio');
		    // box.setAttribute('class','radio-inline');
		    box.appendChild(little);
			// little.appendChild(input);
			var insertText = document.createTextNode(m[k]);
			little.appendChild(label);
			label.appendChild(input);
			label.appendChild(insertText);
			// label.innerHTML = m[k];

		}
		
	}
	
 //    const query = Bmob.Query('tableName');
	// 	query.set("name","Bmob")
	// 	query.set("cover","后端云")
	// 	query.save().then(res => {
 //  			console.log(res)
	// 	}).catch(err => {
 //  		console.log(err)
	// })
	// var btnBox = document.createElement('div');
	var subox = document.createElement('div');
	var submit = document.createElement('div');
	var complete = document.createElement('p');
	// btnBox.appendChild(submit);
	subox.setAttribute('class','subox');
	submit.setAttribute('class','btn');
	submit.setAttribute('type','submit');
	complete.setAttribute('class','complete');
	// submit.setAttribute('class','btn-default');
	submit.innerHTML = '提交'
	// submit.style.borderWidth = '10px';
	submit.style.borderColor = 'black';
	// submit.style.width = '100px';
	// submit.style.height = '100px';
	// submit.style.backgroundColor = 'red';
    form.appendChild(subox);
    subox.appendChild(submit);
    form.appendChild(complete);
    submit.addEventListener('click',score);
    //
    function score(){
    	// console.log('111');
    	// console.log(t[0].r);
    	// console.log(w[0].r);
    	var p = t.length + w.length;
    	// console.log(p);
    	for (var i = 0; i < p; i++) {
    		// console.log(222);
    		var d = String(i+1);
    		var radio = document.getElementsByName(d)
    		for (var k = 0; k < radio.length; k++) {
    			if (radio[k].checked) {
    				// console.log(radio[k].value);
    				console.log(i);
    				if (i < 100) {
    					console.log('11');
    					if (radio[k].value == t[i].r) {
    						console.log('22');
    						sum += 0.5;
    						// console.log(sum);
    						// console.log(d);
    					}
    				}
    				else{
    					console.log('111');
    					var j = i - t.length;
    					// console.log(radio[k].value);
    					// console.log(w[j].r);
    					if(radio[k].value == w[j].r) {
    						console.log('222');
    						sum += 0.5;
    						// console.log('babababa');
    						console.log(sum);
    						// console.log(d);
    					}
    				}
    				
    			}
    		}
    	}
    	// console.log(sum);
    	// alert(sum);
    	var name = document.querySelector('#name').value;
    	var number = document.querySelector('#number').value;
    	var college = document.querySelector('#college').value;
    	console.log(name);
    	console.log(number);
    	console.log(college);
    	console.log(sum);
    	const query2 = Bmob.Query('Score1');
    	query2.set('name',name);
    	query2.set('number',number);
    	query2.set('college',college);
    	query2.set('score',sum);
    	query2.save().then(res=>{
    		console.log(res)
    		complete.innerHTML = '测试完成';
    	}).catch(err=>{
    		console.log(err);
    	})
    	// submit.setAttribute('class','disabled');
    }

})

})
// const query1 = Bmob.Query('judge');
// query1.find().then(res =>{
// 	console.log(res[0].a1);
// 	console.log(res.length);
	
// 	for (var i = 0; i < res.length; i++) {
// 		t[i] = new Exam1(res[i].id,res[i].question,res[i].a1,res[i].a2,res[i].r);
// 		// return t[i];
// 	}
// 	console.log(t[0]);
// 	console.log(t[1]);
// 	for (var i = 0; i < t.length; i++) {
// 		var block = document.createElement('div');
// 		// block.setAttribute('class','radio')
// 		// block.style.display = 'flex';
// 		block.setAttribute('class','form-group');
// 		var h4 = document.createElement('label');
// 		h4.innerHTML =  t[i].id +'、'+ t[i].question;
// 		form.appendChild(block);
// 		block.appendChild(h4);
// 		var box = document.createElement('div');
// 		box.setAttribute('class','box');
// 		// box.style.display = 'flex';
// 		// box.style.justifyContent = 'spaceAround';
// 		block.appendChild(box);
// 		console.log(i);
// 		for (var k = 0; k < 2; k++) {
// 			var m = [t[i].a1,t[i].a2]
// 			var input = document.createElement('input');
// 			input.setAttribute('type','radio');
// 			input.setAttribute('name',t[i].id);
// 			input.setAttribute('value',m[k]);
// 		    var label = document.createElement('label');
// 		    // label.innerHTML = m[k];
// 		    // label.setAttribute('class','radio-inline');
		    
// 		    var little = document.createElement('div');
// 		    little.setAttribute('class','radio');
// 		    // box.setAttribute('class','radio-inline');
// 		    box.appendChild(little);
// 			// little.appendChild(input);
// 			var insertText = document.createTextNode(m[k]);
// 			little.appendChild(label);
// 			label.appendChild(input);
// 			label.appendChild(insertText);
// 			// label.innerHTML = m[k];

// 		}
		
// 	}
	
//  //    const query = Bmob.Query('tableName');
// 	// 	query.set("name","Bmob")
// 	// 	query.set("cover","后端云")
// 	// 	query.save().then(res => {
//  //  			console.log(res)
// 	// 	}).catch(err => {
//  //  		console.log(err)
// 	// })
// 	// var btnBox = document.createElement('div');
// 	var submit = document.createElement('button');
// 	// btnBox.appendChild(submit);
// 	submit.setAttribute('class','btn');
// 	submit.setAttribute('type','submit');
// 	// submit.setAttribute('class','btn-default');
// 	submit.innerHTML = '提交'
// 	// submit.style.borderWidth = '10px';
// 	submit.style.borderColor = 'black';
// 	// submit.style.width = '100px';
// 	// submit.style.height = '100px';
// 	// submit.style.backgroundColor = 'red';
//     form.appendChild(submit);
//     submit.addEventListener('click',score);
//     //
//     function score(){
//     	console.log('111');
//     	for (var i = 0; i < t.length; i++) {
//     		var radio = document.getElementsByName(t[i].id)
//     		for (var k = 0; k < radio.length; k++) {
//     			if (radio[k].checked) {
//     				// console.log(radio[k].value);
//     				if (radio[k].value == t[i].r) {
//     					sum += 2.5;
//     					// console.log(sum);
//     				}
//     			}
//     		}
//     	}
//     	// console.log(sum);
//     	// alert(sum);
//     	var name = document.querySelector('#name').value;
//     	var number = document.querySelector('#number').value;
//     	var college = document.querySelector('#college').value;
//     	console.log(name);
//     	console.log(number);
//     	console.log(college);
//     	console.log(sum);
//     	const query = Bmob.Query('Score');
//     	query.set('name',name);
//     	query.set('number',number);
//     	query.set('college',college);
//     	query.set('score',sum);
//     	query.save().then(res=>{
//     		console.log(res)
//     	}).catch(err=>{
//     		console.log(err);
//     	})
//     }

// })


//

