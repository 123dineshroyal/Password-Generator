const upperSet="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet="abcdefghijklmnopqrstuvwxyz";
const numberSet="1234567890";
const symbolSet="!@#$%^&*()_+";

//selectors
const passwordBox=document.getElementById("pass-box");

const totalChar=document.getElementById("total-char");

const upperInput=document.getElementById("upper-case");

const lowerInput=document.getElementById("lower-case");

const numberInput=document.getElementById("numbers");

const symbolInput=document.getElementById("symbols");

const randomData = (dataSet) =>{
	return dataSet[Math.floor(Math.random()*dataSet.length)]
}

const generatePassword = (password="") =>{

		if(upperInput.checked){
			password += randomData(upperSet)
		}

		if(lowerInput.checked){
			password += randomData(lowerSet)
		}

		if(numberInput.checked){
			password += randomData(numberSet)
		}

		if(symbolInput.checked){
			password += randomData(symbolSet)
		}

		if(password.length < totalChar.value){
			return generatePassword(password)
		}

		//console.log(truncateString(password,totalChar.value))
		let genPass = truncateString(password,totalChar.value);

		passwordBox.innerText=genPass;

}

document.getElementById("btn").addEventListener(
	"click",
	function () {
		generatePassword();
	})


function truncateString(str,num){
	if(str.length>num){
		let substr=str.substring(0,num);
		return substr;
	}
	else{
		return str;
	}
}