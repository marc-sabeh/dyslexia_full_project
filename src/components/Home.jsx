import React, { Component} from 'react';

export default class Home extends Component {
    state={
        text:[],
        voices:[],
        voice_choosen:[],
        changed_text:[]
    }

    componentDidMount(){
        // console.log(window.responsiveVoice.getVoices());
        window.responsiveVoice.setDefaultVoice("Arabic Female");
    }
    submithandler(e){
        e.preventDefault();
        const app = {
            speak:(word) => {return window.responsiveVoice.speak(word);},
            more:(word, more) => {return window.responsiveVoice.speak(word, more);},
        }

        if(this.state.text === ""){
            app.speak("Please type something");
        }
        else{
        app.speak(this.state.text); 
        }
        app.more(this.state.text, this.state.voice_choosen);
}
    changetext(e){
        e.preventDefault();
        this.setState({changed_text: this.state.text});
    }
    render() {
        return (
            <div className="container text-center">
                <img alt="microphone" className="mb-5 w-50 mt-5" src="images/microphone.jpg"></img>
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
                            {/* {this.state.voices.map(voice =>
                                <option>
                                    {voice.name}
                                </option>
                                    )} */}
                                            <option value='US English Female'>Solovoice (US Female)</option>
                                            <option value='UK English Male'>Microsoft David (UK Male)</option>
                                            <option value='Japanese Female'>Oriba (Japanese Female)</option>
                                            <option value='Arabic Female'>Aesha (Arabic Female)</option>
                                            <option value='French Male'>Charles (French Male)</option>
                                            <option value='Swedish Female'>swed (Swedish female)</option>
                                            <option value='Afrikaans Male'>Tyrone (Afrikaan Male)</option>
                                            <option value='Hindi Female'>Divya (Hindi Female)</option>
                                            <option value='Greek Male'>Khis (Greek Male)</option>
                                            <option value='Spanish Female'>Rodriguez (Spanish Female)</option>
                                            <option value='Filipino Female'>Fil (Fillipino Male)</option>
                                            <option value='Russian Male'>vikrel (Russian Male)</option>
                                            <option value='Chinese Male'>Yin chen (Chinese Male)</option>
                                            
                             </select>
                        </div>
                        <button className="btn btn-light btn-lg btn-block" onClick={(e)=>this.submithandler(e)}>Submit</button>
                        <button className="btn btn-light btn-lg btn-block" onClick={(e)=>this.changetext(e)}>Convert</button>
                    </form>
                        <div className="mb-5 text-of-made-better">
                                {this.state.changed_text}
                        </div>
                    </div>
                       
                </div>
            </div>
        )
    }
}
