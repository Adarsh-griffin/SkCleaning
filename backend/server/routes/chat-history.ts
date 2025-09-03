import express from 'express';

const router = express.Router();

// In-memory storage for chat history
let chatHistory: any[] = [];

// Store chat history
router.post('/chat-history', (req, res) => {
  try {
    const { sessionId, clientName, clientPhone, messages, conversationData, startTime, endTime } = req.body;
    
    if (!sessionId || !clientName || !clientPhone || !messages) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: sessionId, clientName, clientPhone, messages'
      });
    }

    const chatRecord = {
      sessionId,
      clientName,
      clientPhone,
      messages: messages.map((msg: any) => ({
        ...msg,
        timestamp: new Date(msg.timestamp)
      })),
      conversationData: conversationData || {},
      startTime: new Date(startTime),
      endTime: endTime ? new Date(endTime) : undefined,
      timestamp: new Date()
    };

    chatHistory.push(chatRecord);
    
    res.status(201).json({
      success: true,
      message: 'Chat history stored successfully',
      sessionId
    });
  } catch (error) {
    console.error('Error storing chat history:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to store chat history',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// Get all chat history
router.get('/chat-history', (req, res) => {
  res.json({
    success: true,
    chatHistory: chatHistory,
    count: chatHistory.length
  });
});

// Get chat history by session ID
router.get('/chat-history/:sessionId', (req, res) => {
  const { sessionId } = req.params;
  const chat = chatHistory.find(c => c.sessionId === sessionId);
  
  if (!chat) {
    return res.status(404).json({
      success: false,
      message: 'Chat session not found'
    });
  }
  
  res.json({
    success: true,
    chat: chat
  });
});

// Delete chat history
router.delete('/chat-history/:sessionId', (req, res) => {
  const { sessionId } = req.params;
  
  const chatIndex = chatHistory.findIndex(c => c.sessionId === sessionId);
  if (chatIndex === -1) {
    return res.status(404).json({
      success: false,
      message: 'Chat session not found'
    });
  }
  
  chatHistory.splice(chatIndex, 1);
  
  res.json({
    success: true,
    message: 'Chat history deleted successfully'
  });
});

export default router;
