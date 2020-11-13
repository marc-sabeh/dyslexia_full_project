import React, { Component} from 'react'

export default class Home extends Component {
    state={
        text:[],
        voices:[],
        voice_choosen:[]
    }
    get_voices(){
        const synth =window.speechSynthesis;
        let voices = synth.getVoices()
        this.setState({voices: voices});
        }
    componentDidMount(){
        //get voices
        const synth =window.speechSynthesis;
        this.get_voices();
        if(synth.onvoiceschanged !== undefined){
            synth.onvoiceschanged = this.get_voices()
        }
    }
    submithandler(e){
        e.preventDefault();
        const synth =window.speechSynthesis;

        //Check if speaking
        if(synth.speaking){
            console.error("Already speaking...");
            return;
        }
        if(this.state.text !== []){
            const speakText = new SpeechSynthesisUtterance(this.state.text);
            console.log(speakText);
            speakText.onend= e=>{
                console.log("Done speaking...");
            }
            
            speakText.onerror=e=>{
                console.error('something went wrong')
            }
            
            const selectedVoice = this.state.voice_choosen;
            console.log(selectedVoice);
            this.state.voices.forEach(voice =>{
                if(voice.name === selectedVoice)
                speakText.voice = voice;
            })
            
            synth.speak(speakText);
    }
}
    render() {
        // console.log(this.state.voices);
        return (
            <div className="container text-center">
                <img alt="micro" className="mb-5 w-75 mt-5" src="images/microphone.jpg"></img>
                <div className="row">
                    <div className="col-md-6 mx-auto">
                    <form>
                        <div className="form-group">
                            <textarea 
                            className="form-control form-control-lg" 
                            placeholder="Type anything..."
                            onChange={event =>this.setState({text: event.target.value})} 
                            required></textarea>
                        </div>
                        <div className="form-group">
                            <select 
                            id="voice-select"
                            className="form-control form-control-lg"
                            onChange={event =>this.setState({voice_choosen: event.target.value})} 
                             >
                            <option>Choose</option>
                            {this.state.voices.map(voice =>
                                <option>
                                    {voice.name}
                                </option>
                                    )}
                             </select>
                        </div>
                        <button className="btn btn-light btn-lg btn-block" onClick={(e)=>this.submithandler(e)}>Submit</button>
                    </form>
                    </div>
                </div>
            </div>
        )
    }
}
