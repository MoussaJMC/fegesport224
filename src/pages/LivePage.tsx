import React, { useState } from 'react';
import { Section } from '../components/common/Section';
import { Hero } from '../components/common/Hero';
import { Button } from '../components/common/Button';
import { Send, Users } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const LivePage: React.FC = () => {
  const [activeStream, setActiveStream] = useState<'youtube' | 'twitch'>('youtube');
  const [messages, setMessages] = useState<Array<{user: string; message: string; timestamp: Date}>>([]);
  const [newMessage, setNewMessage] = useState('');
  const { user, isAuthenticated } = useAuth();

  const streams = {
    youtube: 'https://www.youtube.com/embed/live_stream?channel=YOUR_CHANNEL_ID',
    twitch: 'https://player.twitch.tv/?channel=YOUR_CHANNEL&parent=localhost'
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim() && isAuthenticated && user) {
      setMessages([
        ...messages,
        {
          user: user.name,
          message: newMessage.trim(),
          timestamp: new Date()
        }
      ]);
      setNewMessage('');
    }
  };

  return (
    <>
      <Hero 
        title="Direct"
        subtitle="Suivez nos événements en direct"
        image="https://images.pexels.com/photos/7862601/pexels-photo-7862601.jpeg"
        height="sm"
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Stream */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Stream Selection */}
              <div className="flex border-b">
                <button
                  className={`flex-1 py-3 px-6 text-center font-medium ${
                    activeStream === 'youtube' 
                      ? 'bg-primary text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveStream('youtube')}
                >
                  YouTube
                </button>
                <button
                  className={`flex-1 py-3 px-6 text-center font-medium ${
                    activeStream === 'twitch' 
                      ? 'bg-primary text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveStream('twitch')}
                >
                  Twitch
                </button>
              </div>

              {/* Stream Player */}
              <div className="aspect-video">
                <iframe
                  src={streams[activeStream]}
                  className="w-full h-full"
                  frameBorder="0"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>

              {/* Stream Info */}
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">
                  Championnat National Guinéen de FIFA 24
                </h2>
                <div className="flex items-center text-gray-600">
                  <Users size={20} className="mr-2" />
                  <span>1,234 spectateurs</span>
                </div>
              </div>
            </div>
          </div>

          {/* Chat Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md h-full flex flex-col">
              <div className="p-4 border-b">
                <h3 className="font-semibold">Chat en direct</h3>
              </div>

              {/* Messages */}
              <div className="flex-1 p-4 overflow-y-auto space-y-4 min-h-[400px]">
                {messages.map((msg, index) => (
                  <div key={index} className="flex flex-col">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium text-primary">{msg.user}</span>
                      <span className="text-xs text-gray-500">
                        {msg.timestamp.toLocaleTimeString()}
                      </span>
                    </div>
                    <p className="text-gray-700">{msg.message}</p>
                  </div>
                ))}
                {messages.length === 0 && (
                  <div className="text-center text-gray-500 mt-4">
                    Pas encore de messages
                  </div>
                )}
              </div>

              {/* Message Input */}
              {isAuthenticated ? (
                <form onSubmit={handleSendMessage} className="p-4 border-t">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      placeholder="Écrivez un message..."
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                    <Button
                      type="submit"
                      variant="primary"
                      disabled={!newMessage.trim()}
                    >
                      <Send size={20} />
                    </Button>
                  </div>
                </form>
              ) : (
                <div className="p-4 border-t text-center">
                  <p className="text-gray-600 mb-2">
                    Connectez-vous pour participer au chat
                  </p>
                  <Button
                    variant="primary"
                    href="/login"
                    fullWidth
                  >
                    Se connecter
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default LivePage;