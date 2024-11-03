// components/Terminal.tsx
import React, { useState, useEffect, useRef , useCallback} from 'react';
import { useTypewriter } from '../hooks/useTypewriter';

interface Command {
  name: string;
  description: string;
  action: (args: string[]) => string;
}

const visibleCommands: Command[] = [
  {
    name: 'cv',
    description: 'Download CV',
    action: () => 'Downloading CV..WiP...',
  },
  {
    name: 'contact',
    description: 'Contact Information',
    action: () => 'Phone: (+48) 517 230 580\nDiscover more using mail command',
  },
  {
    name: 'man',
    description: 'Show available commands',
    action: () => visibleCommands.map(cmd => `${cmd.name} - ${cmd.description}`).join('\n'),
  },
  {
    name: 'mail',
    description: 'Show email address (use: mail private or mail company)',
    action: (args) => {
      if (args[0] === 'private') return <a href="mailto:bruno@stelmaszyk.dev"><u>bruno@stelmaszyk.dev</u></a>;
      if (args[0] === 'company') return <a href="mailto:bruno.stelmaszyk@cloudvance.eu"><u>bruno.stelmaszyk@cloudvance.eu</u></a>;
      return 'Use: mail private or mail company';
    },
  },
  {
    name: 'company',
    description: 'Show company information',
    action: () => 'Company Name: Cloudvance\nEstablished: 2023\nMission: Being innovative in IT World\nVAT ID PL7811812758',
  },
  {
    name: 'echo',
    description: 'Oh come on, you know what it does',
    action: (args) => args.join(' '),
  },
  {
    name: 'calc',
    description: 'Simple calculator (np. calc 2 + 2)',
    action: (args) => {
      const [a, op, b] = args;
      const numA = parseFloat(a);
      const numB = parseFloat(b);
      switch(op) {
        case '+': return `${numA} + ${numB} = ${numA + numB}`;
        case '-': return `${numA} - ${numB} = ${numA - numB}`;
        case '*': return `${numA} * ${numB} = ${numA * numB}`;
        case '/': return `${numA} / ${numB} = ${numA / numB}`;
        default: return 'Nieznana operacja. Użyj: + - * /';
      }
    },
  },
  {
    name: 'whoami',
    description: 'Show information about user and client',
    action: () => {
      const browserName = () => {
        const userAgent = navigator.userAgent;
        if (userAgent.match(/chrome|chromium|crios/i)) return "Chrome";
        if (userAgent.match(/firefox|fxios/i)) return "Firefox";
        if (userAgent.match(/safari/i)) return "Safari";
        if (userAgent.match(/opr\//i)) return "Opera";
        if (userAgent.match(/edg/i)) return "Edge";
        return "Unknown";
      };
  
      return `
  User Agent: ${navigator.userAgent}
  Browser: ${browserName()}
  Language: ${navigator.language}
  Platform: ${navigator.platform}
  Screen Resolution: ${window.screen.width}x${window.screen.height}
  Color Depth: ${window.screen.colorDepth}-bit
  Time Zone: ${Intl.DateTimeFormat().resolvedOptions().timeZone}
      `.trim();
    },
  },
  {
    name: 'experience',
    description: 'Tell about my experience',
    action: (args) => {
      if (args[0] === 'lz') return 'Maintaing current configurations in Landing zone at GCP.\nDeploying new configurations for new projects.\nCreating new projects and resources in GCP.';
      if (args[0] === 'devops') return 'Maintaining code in Google Cloud Source repositories\nWriting and deploying pipelines in Azure DevOps \nPerforming migration from Azure DevOps to BitBucket.';
      if (args[0] === 'linux') return 'Administering Linux/Unix systems:\nSemi-advanced knowledge about administering IBM AIX servers, incl. LPARs and VIOs.\nAdvanced knowledge about administering Linux servers, incl. RHEL, CentOS, Ubuntu.';
      if (args[0] === 'virtualization') return 'Knowledge of multiple virtualization systems: \nVMware ESXi & vSphere\nMicrosoft Hyper-V 2019+\nProxmox VE.';
      if (args[0] === 'webdev') return 'Creating websites for small enterprises and single enterpreneurs.';
      if (args[0] === 'courses') return 'Created video courses for Videopoint (Helion Group) about:\nVPN: OpenVPN and Wireguard in practice\nProxmox - Basics of virtualization\nVMware: TBA\nMachine Learning: TBA\nAlways happy to share knowledge.';
      return 'Usage: experience {parameter}: \nlz - Landing Zone\nwebdev - Website Development\ndevops - DevOps\nlinux - Linux Administration\nvirtualization - Virtualization\nwebdev - Website Development\ncourses - Courses';
    },
  },
  {
    name: 'education',
    description: 'Get some information about my education',
    action: () => '2021 - WSB Poznan - Engineers degree from Information Technology\n2024 - WSB Merito Wrocław - Master degree in progress\nThesis: Cloud Computing and Terraform',
  },
  {
    name: 'realizations',
    description: 'Website for new company - building, gardening and handmade decorations',
    action: () => {
      return (
        <>
          <p>
            Maja-Dekoracje. Dom i Ogród - website for new company - building, gardening and handmade decorations
          </p>
          <a href="https://maja-dekoracje.pl"><u>Visit this website</u></a>
        </>
      );
    }
  },
  {
    name: 'projects',
    description: 'Get some information about my projects',
    action: () => '1. ADS-B.Pro - Web service to track flights. Gallery of the web app will be provided later\n2. RawFlight - project closed\n3. StelDEV AI Studio: project to create summaries of recordings using Whisper AI and GPT-1o, developing multitool\n4. SR-Scheduler - web app in Flask to create new schedules for SimRail Train Simulator',
  },
  {
    name: 'clear',
    description: 'Clear terminal',
    action: () => '',
  },
];

const hiddenCommands: Command[] = [
    {
      name: 'sudo',
      description: 'Do you really think you have the power?',
      action: () => "Nice try, but you don't have sudo privileges here!",
    },
    {
      name: 'sudo su',
      description: 'Trying to become root?',
      action: () => "You're persistent, aren't you? But still no root access for you!",
    },
    {
      name: 'sudo su -',
      description: 'Really insistent on becoming root',
      action: () => "Wow, you know your stuff! But sorry, no root here. Try something else?",
    },
    {
      name: 'su',
      description: 'Attempt to switch user',
      action: () => "su: Authentication failure",
    },
    {
        name: 'snake',
        description: 'Play a game of Snake',
        action: () => <SnakeGame />,
      },
  ];

  const allCommands: Command[] = [...visibleCommands, ...hiddenCommands];

  const SnakeGame: React.FC = () => {
    const [snake, setSnake] = useState<[number, number][]>([[0, 0]]);
    const [food, setFood] = useState<[number, number]>([5, 5]);
    const [dir, setDir] = useState<[number, number]>([1, 0]);
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0);
    const [lastDir, setLastDir] = useState<[number, number]>([1, 0]);
  
    const gridSize = 15;
  
    const moveSnake = useCallback(() => {
      if (gameOver) return;
  
      const newSnake = [...snake];
      const head = [
        (newSnake[0][0] + dir[0] + gridSize) % gridSize,
        (newSnake[0][1] + dir[1] + gridSize) % gridSize
      ] as [number, number];
  
      if (newSnake.some(segment => segment[0] === head[0] && segment[1] === head[1])) {
        setGameOver(true);
        return;
      }
  
      newSnake.unshift(head);
  
      if (head[0] === food[0] && head[1] === food[1]) {
        setScore(score => score + 1);
        setFood([
          Math.floor(Math.random() * gridSize),
          Math.floor(Math.random() * gridSize)
        ]);
      } else {
        newSnake.pop();
      }
  
      setSnake(newSnake);
      setLastDir(dir);
    }, [snake, dir, food, gameOver, gridSize]);
  
    useEffect(() => {
      const handleKeyPress = (e: KeyboardEvent) => {
        const newDir: [number, number] = (() => {
          switch (e.key) {
            case 'ArrowUp': return [0, -1];
            case 'ArrowDown': return [0, 1];
            case 'ArrowLeft': return [-1, 0];
            case 'ArrowRight': return [1, 0];
            default: return dir;
          }
        })();
  
        if (newDir[0] !== -lastDir[0] || newDir[1] !== -lastDir[1]) {
          setDir(newDir);
        }
      };
  
      window.addEventListener('keydown', handleKeyPress);
  
      const gameInterval = setInterval(moveSnake, 300);
  
      return () => {
        window.removeEventListener('keydown', handleKeyPress);
        clearInterval(gameInterval);
      };
    }, [moveSnake, dir, lastDir]);
  
    const restartGame = () => {
      setSnake([[0, 0]]);
      setFood([5, 5]);
      setDir([1, 0]);
      setLastDir([1, 0]);
      setGameOver(false);
      setScore(0);
    };
  
    const renderCell = (x: number, y: number) => {
        if (snake.some(segment => segment[0] === x && segment[1] === y)) {
          return '■';
        }
        if (food[0] === x && food[1] === y) {
          return '●';
        }
        return '·';
      };
    
      return (
        <div>
          <p>Score: {score}</p>
          <div style={{ 
            fontFamily: 'Courier, monospace', 
            lineHeight: '1', 
            letterSpacing: '0.2em',
            whiteSpace: 'pre'
          }}>
            {Array(gridSize).fill(0).map((_, y) => (
              <div key={y}>
                {Array(gridSize).fill(0).map((_, x) => (
                  <span key={x} style={{ display: 'inline-block', width: '1em', textAlign: 'center' }}>
                    {renderCell(x, y)}
                  </span>
                ))}
              </div>
            ))}
          </div>
          {gameOver && (
            <div>
              <p>Game Over! Your score: {score}</p>
              <button onClick={restartGame}>Restart</button>
            </div>
          )}
          <p>Use arrow keys to control the snake.</p>
        </div>
      );
    };
    
  


const Terminal: React.FC = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState<(string | React.ReactNode)[]>([]);
    const [cursorPosition, setCursorPosition] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);
    const terminalRef = useRef<HTMLDivElement>(null);
    const promptText = 'stelshell@net:~$ ';
    const { displayedText: prompt, isComplete: promptComplete } = useTypewriter(promptText, 50);
  
    useEffect(() => {
        setOutput([
          "Welcome to my Shell!",
          "Type 'man' for a list of available commands",
          "Or... why don't you try to discover it?"
        ]);
      }, []);
    
      const handleClear = () => {
        setOutput([]);
      };
  
      const handleSubmit = (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        const args = input.trim().split(' ');
        const command = allCommands.find(cmd => cmd.name === args[0]);
        
        if (command) {
          if (command.name === 'clear') {
            setOutput([]);
          } else {
            setOutput(prev => [...prev, `${promptText}${input}`, command.action(args.slice(1))]);
          }
        } else if (input.trim() !== '') {
          setOutput(prev => [...prev, `${promptText}${input}`, `Command not found: ${args[0]}`]);
        }
        
        setInput('');
        setCursorPosition(0);
      };
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInput(e.target.value);
      setCursorPosition(e.target.selectionStart || 0);
    };
  
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        handleSubmit();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        setTimeout(() => {
          setCursorPosition(inputRef.current?.selectionStart || 0);
        }, 0);
      }
    };
  
    const focusInput = () => {
      inputRef.current?.focus();
    };
  
    const renderOutput = (line: string | React.ReactNode) => {
        if (typeof line === 'string') {
          return line.split('\n').map((subLine, subIndex) => (
            <div key={subIndex}>{subLine}</div>
          ));
        }
        return <div>{line}</div>;
      };
    
      return (
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-center text-green-500">Meet me through my terminal</h2>
          <h3 className="text-sm font-medium mb-4 text-center text-green-400">Use 'man' command if you don't know how to use it.</h3>
          <div className="bg-gray-800 p-1 rounded-lg">
            <div 
              ref={terminalRef}
              className="bg-black text-green-500 p-4 font-mono h-96 overflow-y-auto rounded-lg terminal-scrollbar"
              onClick={focusInput}
            >
              {output.map((line, index) => (
                <React.Fragment key={index}>
                  {renderOutput(line)}
                </React.Fragment>
              ))}
              <div className="flex">
                <span className="mr-2">{promptText}</span>
                <div className="relative flex-grow">
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    className="bg-black text-green-500 outline-none w-full caret-transparent"
                    style={{ caretColor: 'transparent' }}
                  />
                  <span 
                    className="absolute top-0 left-0 text-green-500"
                    style={{ 
                      left: `${cursorPosition * 0.6}em`,
                      animation: 'blink 1s step-end infinite'
                    }}
                  >
                    _
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };
    
    export default Terminal;