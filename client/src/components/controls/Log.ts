class Log {

  minPos: number;
  maxPos: number;
  minVal: number;
  maxVal: number;
  scale: number;

  constructor(minPos: number, maxPos: number) {
    this.minPos = minPos
    this.maxPos = maxPos
    this.minVal = Math.log(minPos)
    this.maxVal = Math.log(maxPos)
    this.scale = (this.maxVal - this.minVal) / (this.maxPos - this.minPos)
  }

  value(position: number) {
    return Math.exp((position - this.minPos) * this.scale + this.minVal)
  }
  
  position(value: number) {
    return this.minPos + (Math.log(value) - this.minVal) / this.scale
  }
}

export default Log;