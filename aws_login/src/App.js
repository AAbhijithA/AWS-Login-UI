import './App.css';
import React, { useState } from 'react';

function App() {
  const [selectedOption, setSelectedOption] = useState('option1');
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  let outputText = '';
  if (selectedOption === 'option1') {
    outputText = 'Root user email address';
  }
  else if (selectedOption === 'option2') {
    outputText = 'Account ID (12 digits) or account alias';
  }
  return (
    <div className="App">
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png' className='aws_img'></img>
      <h2> Sign in</h2>
      <div className={`radio-box ${selectedOption === 'option1' ? 'selected' : ''}`}>
        <label>
          <input type="radio" value="option1" checked={selectedOption === 'option1'} onChange={handleOptionChange}/>Root user
          <p className='normal'>Account owner that performs tasks requiring unrestricted access. <a href='#'>Learn more</a></p>
        </label>
      </div>
      <div className={`radio-box ${selectedOption === 'option2' ? 'selected' : ''}`}>
        <label>
          <input type="radio" value="option2" checked={selectedOption ==='option2'} onChange={handleOptionChange}/>IAM user
            <p className='normal'>User within an account that performs daily tasks. <a href='#'>Learn more</a></p>
        </label>
      </div>
      {selectedOption && (
        <div className="selected-option">
          <p className='optionS'>{outputText}</p>
        </div>
      )}
      <div className="rounded-input">
        <input type="text" placeholder=""/>
      </div>
      <br/>
      <button className="next-button">Next</button>
      <p className='normal'>
        By continuing, you agree to the <a href='#'>AWS Customer Agreement</a>
        or other agreement for AWS services, and the <a href='#'>Privacy Notice</a>.
        This site uses essential cookies. See our <a href='#'>Cookie Notice</a> for
        more information.
      </p>
      <div className="divider">
        <hr className="line" /><span className="new-to-aws" color='lightgray'>New to AWS?</span><hr className="line" />
      </div>
      <br/>
      <button className="create-aws-account-button">Create a New AWS Account</button>
      <br/>
      <br/>
      <p className='normal'>© 2023, Amazon Web Services, Inc. or its affiliates. All rights reserved.</p>
    </div>
  );
}

export default App;