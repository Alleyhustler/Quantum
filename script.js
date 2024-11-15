document.getElementById('shillForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const coinName = document.getElementById('coinName').value;
    const ticker = document.getElementById('ticker').value;
    const reasons = document.getElementById('reasons').value;
    const shillText = document.getElementById('shillText').value;
  
    // Create the Shill Thread Div
    const shillThread = document.createElement('div');
    shillThread.classList.add('shillThread');
    
    // Construct the thread content
    // Construct the thread content
    shillThread.innerHTML = `
    <h3 class="command">[Terminal]: Shilling ${coinName} (${ticker})</h3>
    <p>
        <span class="command">#Reasons to Buy:</span>
        <span class="typing">${reasons}</span>
    </p>
    <p>
        <span class="command">#Shill/Promote:</span>
        <span class="typing">${shillText}</span>
    </p>
    `;


  
    // Append the new thread to the container
    document.getElementById('shillThreadContainer').appendChild(shillThread);
    
    // Clear form inputs
    document.getElementById('shillForm').reset();
  });
  