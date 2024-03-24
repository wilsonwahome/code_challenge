function getPoints() {
    let speed = parseInt(document.getElementById("speed").value, 10) || 0;
  
    if (speed< 0 || speed > 135) {
      alert("License Suspended");
      return; // Exit the function early if marks are invalid
    }
  
    let points =
      speed> 130
        ? "11 Demerit points"
        : speed >= 125
        ? "10 demerit points"
        : speed>= 120
        ? "9 Demerit  points"
        : speed >= 115
        ? "8 Demerit points"
        : speed >=110 ?
        "7 Demerit points"
        : speed >=100 ?
        "6 Demerit points":
        speed >=95 ?
        "5 Demerit points":
        speed >=90 ?
        "4 Demerit points":
        speed >=85 ?
        "3 Demerit points":
        speed>=80?
        "2 Demerit points":
        speed >=75?
        "1 Demerit point":
        "ok";
  
    document.getElementById("result").innerText = `${speed}km/hr ,Your points: ${points}`;
  }