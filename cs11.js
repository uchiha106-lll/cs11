// CS11 question bank. To add a chapter: add an object to "chapters". Question format: [question, [A,B,C,D], correctIndex(0-3), explanation]
window.BOOK = {
  title: "CS11",
  subtitle: "Computer Science – Class 11",
  chapters: [
  { n: 1, title: "Computer Systems",
    notes: [
      "Digital systems use only two values: 0 (OFF/LOW/FALSE) and 1 (ON/HIGH/TRUE), called bits.",
      "Analog signals are continuous (sine wave); digital signals are discrete (square wave) and resist noise better.",
      "Boolean algebra (George Boole, 1850s) has basic operations AND, OR, NOT. Truth tables list every input combination.",
      "AND = 1 only if all inputs are 1. OR = 1 if any input is 1. NOT inverts. XOR = 1 when inputs differ. NAND/NOR are the inverted AND/OR.",
      "K-maps simplify Boolean expressions; cells are arranged in Gray code so neighbours differ by one bit.",
      "LogiSim is the tool used to build and test logic circuits.",
      "SDLC phases: requirements, design, implementation, testing, deployment, maintenance. Waterfall is linear; Agile works in short sprints.",
      "OSI model has 7 layers; TCP/IP has 4 layers."
    ],
    qs: [
      ["How many values does a digital system use?", ["Two", "Three", "Ten", "Unlimited"], 0, "Digital systems use only 0 and 1."],
      ["Which signal is continuous and wave-like?", ["Digital", "Analog", "Binary", "Square"], 1, "Analog signals take any value in a range and change smoothly."],
      ["Who developed Boolean algebra?", ["Charles Babbage", "Alan Turing", "George Boole", "John von Neumann"], 2, "George Boole, an English mathematician, in the 1850s."],
      ["An AND gate gives output 1 when:", ["Any input is 1", "All inputs are 1", "All inputs are 0", "Inputs differ"], 1, "AND outputs 1 only when ALL inputs are 1."],
      ["An OR gate has inputs 0 and 1. Its output is:", ["0", "1", "Undefined", "Both"], 1, "OR outputs 1 if at least one input is 1."],
      ["What does a NOT gate do?", ["Adds inputs", "Inverts the input", "Multiplies inputs", "Stores data"], 1, "NOT reverses 0 to 1 and 1 to 0."],
      ["Which gate gives 0 only when all inputs are 1?", ["NOR", "XOR", "NAND", "OR"], 2, "NAND is the inverse of AND."],
      ["XOR outputs 1 when:", ["Inputs are the same", "Inputs are different", "Both inputs are 0", "Both inputs are 1"], 1, "XOR (exclusive OR) is 1 when inputs differ."],
      ["K-map cells follow which code so neighbours differ by one bit?", ["ASCII", "BCD", "Gray code", "Hex"], 2, "Gray code ensures adjacent cells change by one bit."],
      ["Which tool is used for building logic circuits?", ["Python", "LogiSim", "Excel", "Access"], 1, "LogiSim is used to design and simulate logic circuits."],
      ["Waterfall model is best described as:", ["Linear and sequential", "Random", "Sprint-based", "Without phases"], 0, "Each phase finishes before the next begins."],
      ["Agile delivers software in short cycles called:", ["Sprints", "Layers", "Gates", "Packets"], 0, "Agile works in sprints with frequent working software."],
      ["How many layers are in the OSI model?", ["4", "5", "7", "9"], 2, "OSI has 7 layers; TCP/IP has 4."],
      ["Which testing method examines the internal code?", ["Black box", "White box", "Blind", "Load"], 1, "White box testing looks at internal structure/code."]
    ] },
  { n: 2, title: "Computational Thinking & Algorithms",
    notes: [
      "Computational thinking pillars: decomposition, pattern recognition, abstraction, algorithms.",
      "Decomposition breaks a big problem into smaller, easier parts.",
      "An algorithm is a finite, step-by-step set of instructions; pseudocode and flowcharts describe it.",
      "Selection sort repeatedly finds the smallest item and places it at the front of the unsorted part.",
      "Linear search checks items one by one. Binary search needs a sorted list and halves the search range each step.",
      "Algorithms are judged on correctness and efficiency."
    ],
    qs: [
      ["Decomposition means:", ["Joining problems", "Breaking a problem into smaller parts", "Deleting data", "Drawing a chart"], 1, "Decomposition splits a complex problem into manageable pieces."],
      ["An algorithm is:", ["A computer virus", "A step-by-step solution", "A hardware part", "A type of data"], 1, "It is a finite, ordered set of steps to solve a problem."],
      ["Pattern recognition is:", ["Finding similarities among problems", "Writing code", "Deleting errors", "Sorting data"], 0, "It spots repeating trends to simplify solving."],
      ["Abstraction means:", ["Showing all details", "Ignoring unnecessary details", "Copying data", "Testing code"], 1, "Abstraction focuses on essentials and hides irrelevant detail."],
      ["Informal, human-readable description of an algorithm is:", ["Machine code", "Pseudocode", "Binary", "Assembly"], 1, "Pseudocode uses plain language in code-like steps."],
      ["Selection sort works by:", ["Swapping neighbours only", "Repeatedly selecting the minimum and placing it first", "Halving the list", "Random shuffling"], 1, "Each pass selects the smallest remaining item."],
      ["Binary search requires the list to be:", ["Sorted", "Empty", "Random", "Numeric only"], 0, "Binary search compares with the middle, so the list must be sorted."],
      ["Linear search checks elements:", ["From the middle", "One by one", "In halves", "Randomly"], 1, "Linear search scans each element in order."],
      ["Which is usually faster on a large sorted list?", ["Linear search", "Binary search", "Both equal", "Neither works"], 1, "Binary search halves the range each step."],
      ["Evaluating an algorithm for correctness means checking that it:", ["Is short", "Gives right output for all valid inputs", "Uses colors", "Runs on any phone"], 1, "A correct algorithm produces the expected result every time."]
    ] },
  { n: 3, title: "Programming Fundamentals (Python)",
    notes: [
      "A program is a set of instructions; low-level languages are close to machine code, high-level languages are close to human language.",
      "Python is a high-level, interpreted language. VS Code is a code editor used to write it.",
      "Basic data types: int, float, str, bool. input() returns a string; print() shows output.",
      "Operators: + - * / (division), // (floor), % (remainder), ** (power); = assigns, == compares.",
      "Decisions use if / elif / else. Loops: for and while; break exits, continue skips an iteration. Indentation matters.",
      "Errors: syntax (wrong rules), runtime (crash while running), logical (wrong result). Read tracebacks from the last line."
    ],
    qs: [
      ["Python is a:", ["Low-level language", "High-level language", "Machine code", "Hardware"], 1, "Python is a high-level interpreted language."],
      ["What type does input() return?", ["int", "float", "str", "bool"], 2, "input() always returns a string."],
      ["What is 7 // 2 in Python?", ["3.5", "3", "4", "1"], 1, "// is floor division, so 7 // 2 = 3."],
      ["What is 7 % 2?", ["3", "1", "0", "2"], 1, "% gives the remainder: 1."],
      ["What is 2 ** 3?", ["6", "5", "8", "9"], 2, "** is the power operator: 2 cubed = 8."],
      ["The operator that compares two values for equality is:", ["=", "==", "!=", ":="], 1, "== compares; = assigns."],
      ["The data type of 3.5 is:", ["int", "str", "float", "bool"], 2, "Numbers with a decimal point are float."],
      ["range(5) produces:", ["1 to 5", "0 to 4", "0 to 5", "1 to 4"], 1, "range(5) gives 0,1,2,3,4."],
      ["Which statement exits a loop immediately?", ["continue", "pass", "break", "skip"], 2, "break terminates the loop."],
      ["Which keyword skips the rest of the current iteration?", ["break", "continue", "exit", "stop"], 1, "continue jumps to the next iteration."],
      ["A program that runs but gives wrong output has a:", ["Syntax error", "Runtime error", "Logical error", "Compile error"], 2, "Logical errors give incorrect results without crashing."],
      ["Breaking Python's grammar rules causes a:", ["Syntax error", "Logical error", "Warning only", "Speed-up"], 0, "Syntax errors stop the program from running."],
      ["Which loop is best when the number of repetitions is known?", ["for", "if", "else", "try"], 0, "for loops iterate a known number of times."],
      ["In Python, blocks of code are defined by:", ["Braces { }", "Indentation", "Semicolons", "Brackets [ ]"], 1, "Indentation marks code blocks."]
    ] },
  { n: 4, title: "Data and Analysis",
    notes: [
      "Data = unprocessed facts. Quantitative = numbers; qualitative = descriptive. Processed, analysed data becomes information.",
      "A DBMS manages databases (Microsoft Access, MySQL, Oracle).",
      "A primary key uniquely identifies each record; a table has only one. A foreign key links to another table's primary key.",
      "ER models show entities and relationships; many-to-many needs a junction table.",
      "Referential integrity keeps related tables consistent.",
      "Charts (pie, bar, line) turn data into insight; a pie chart shows parts of a whole."
    ],
    qs: [
      ["Data is best defined as:", ["Processed knowledge", "Unprocessed facts and figures", "Only numbers", "Only text"], 1, "Data are raw facts collected from sources."],
      ["Daily temperature readings are:", ["Qualitative", "Quantitative", "Neither", "Binary only"], 1, "Numerical data is quantitative."],
      ["Colour of cars in a parking lot is:", ["Quantitative", "Qualitative", "Numeric", "Boolean"], 1, "Descriptive data is qualitative."],
      ["Which is a DBMS?", ["Microsoft Access", "Notepad", "VS Code", "LogiSim"], 0, "Access, MySQL and Oracle are DBMS examples."],
      ["A primary key:", ["Can repeat", "Uniquely identifies each record", "Is always text", "Is optional in tables"], 1, "It uniquely identifies a record."],
      ["How many primary keys can a table have?", ["Only one", "Two", "Unlimited", "None"], 0, "Each table has only one primary key."],
      ["A foreign key is used to:", ["Delete rows", "Link two tables", "Sort data", "Encrypt data"], 1, "It refers to the primary key of another table."],
      ["A many-to-many relationship is resolved using a:", ["Junction table", "Pie chart", "Query only", "Report"], 0, "A junction table holds keys from both tables."],
      ["Referential integrity ensures:", ["Faster internet", "Consistent relationships between tables", "Bigger files", "Colour themes"], 1, "It prevents orphan or invalid references."],
      ["Which chart shows parts of a whole?", ["Pie chart", "Scatter plot", "Line graph", "Flowchart"], 0, "A pie chart shows proportions."],
      ["Analysed data that supports decisions is called:", ["Noise", "Information", "Raw data", "Bits"], 1, "Processed data becomes information/insight."]
    ] },
  { n: 5, title: "Applications and Impacts of Computing",
    notes: [
      "AI is 'artificial' because humans create it, and 'intelligence' because it does tasks needing thinking (face unlock, video suggestions, chatbots).",
      "IoT devices gather real-world data; data analytics studies it; AI uses results to decide.",
      "Sensors detect/collect input from the environment; actuators perform actions in response.",
      "Connectivity technologies include Wi-Fi, Bluetooth and LoRaWAN (long range, low power).",
      "Computing is used in education (LMS), healthcare (digital records), banking (apps/ATMs) and farming (smart irrigation).",
      "Computing also creates careers (e.g. UX/UI designer) and assistive tools for special education."
    ],
    qs: [
      ["Face unlock on a phone uses:", ["AI", "A sensor only", "Fax", "Magnetism"], 0, "Recognising faces is an AI task."],
      ["IoT stands for:", ["Internet of Things", "Input of Tools", "Internal Operating Tech", "Index of Terms"], 0, "Internet of Things."],
      ["Devices that perform actions in response to signals are:", ["Sensors", "Actuators", "Routers", "Monitors"], 1, "Actuators act; sensors detect."],
      ["Devices that detect physical conditions like temperature are:", ["Sensors", "Actuators", "Servers", "Printers"], 0, "Sensors collect data from the environment."],
      ["LoRaWAN is known for:", ["Long range, low power", "High-speed gaming", "Short range only", "Video editing"], 0, "LoRaWAN suits low-power wide-area IoT."],
      ["In a smart system, who studies the collected data?", ["Data analytics", "The mouse", "The monitor", "The cable"], 0, "Data analytics sorts and studies the data; AI then decides."],
      ["Smart irrigation helps farmers by:", ["Using weather and sensor data", "Printing money", "Replacing soil", "Blocking rain"], 0, "It uses data to water crops efficiently."],
      ["YouTube suggesting videos you may like is an example of:", ["AI", "Hardware", "A virus", "Manual selection"], 0, "Recommendation systems use AI."],
      ["Which is an example of a digital record system in healthcare?", ["Hospital digital records", "Paper only", "Radio", "Pen"], 0, "Hospitals use digital records to store patient data."]
    ] },
  { n: 6, title: "Digital Literacy",
    notes: [
      "Digital literacy = using digital devices, the internet and tools in a safe, effective and responsible way.",
      "Digital inquiry workflow: question, collect, analyse, create (and share responsibly).",
      "Primary sources = direct collection (surveys, interviews, experiments). Secondary = existing sources (books, articles). Tertiary = summaries of secondary (encyclopedias).",
      "Evaluate sources for reliability, and use advanced search queries to find better results.",
      "Follow ethical guidelines: permission, privacy, honesty, crediting sources (avoid plagiarism)."
    ],
    qs: [
      ["Digital literacy means:", ["Only owning a phone", "Using digital tools safely, effectively and responsibly", "Typing fast", "Playing games"], 1, "It is about safe, effective and responsible use."],
      ["The Information Age is marked by:", ["Scarce data", "Vast data produced and shared instantly", "No internet", "Only paper"], 1, "Huge amounts of data are created and accessed instantly."],
      ["Data collected directly by the researcher is:", ["Primary data", "Secondary data", "Tertiary data", "Fake data"], 0, "Primary data is collected first-hand."],
      ["A survey you conduct yourself is a:", ["Primary source", "Secondary source", "Tertiary source", "Search engine"], 0, "Surveys are direct data collection."],
      ["Which is usually a secondary source?", ["Your own interview", "A published article", "Your experiment", "Your questionnaire"], 1, "Secondary sources are existing, published material."],
      ["Encyclopedias are usually:", ["Primary", "Secondary", "Tertiary", "Illegal"], 2, "Tertiary sources summarise secondary sources."],
      ["Which step comes first in the digital inquiry workflow?", ["Create", "Question", "Share", "Delete"], 1, "Start with a clear question, then collect and analyse."],
      ["Using someone's work without credit is:", ["Research", "Plagiarism", "Citation", "Analysis"], 1, "Plagiarism is presenting others' work as your own."],
      ["A key ethical rule when collecting data is to:", ["Ignore privacy", "Get consent and protect privacy", "Copy freely", "Hide sources"], 1, "Respect permission and privacy."]
    ] }
  ]
};
