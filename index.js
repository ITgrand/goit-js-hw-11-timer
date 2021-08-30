class CountdownTimer {
    constructor({ selector, targetDate }){
            
      this.targetDate = targetDate;      
      this.days = document.querySelector('[data-value="days"]');
      this.hours = document.querySelector('[data-value="hours"]');
      this.mins = document.querySelector('[data-value="mins"]');
      this.secs = document.querySelector('[data-value="secs"]');
    }
    
    timer(){
    const timeInFurure = this.targetDate.getTime(); 
    
    setInterval(() =>{
        const currentTime = Date.now();     
        const deltaTime = timeInFurure - currentTime;
        const days = Math.floor(deltaTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((deltaTime % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((deltaTime % (1000 * 60)) / 1000);

        this.days.textContent = days  < 10 ? `0${days}` : days; 
        this.hours.textContent = hours  < 10 ? `0${hours}` : hours; 
        this.mins.textContent = mins  < 10 ? `0${mins}` : mins;
        this.secs.textContent = secs  < 10 ? `0${secs}` : secs;
        
        return `${days}:${hours}:${mins}:${secs}`;  
            
    }, 1000);
    }      
}

const countDown = new CountdownTimer({
    selector: "#timer-1",
    targetDate: new Date("Jul 5, 2025"),
    }
)

countDown.timer();