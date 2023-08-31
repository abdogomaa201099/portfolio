import p1p1 from '../assets/images/p1p1.png';
import p1p2 from '../assets/images/p1p2.png';
import p1p3 from '../assets/images/p1p3.png';
import p1p4 from '../assets/images/p1p4.png';
import p1p5 from '../assets/images/p1p5.png';

import p2p1 from '../assets/images/p2p1.png';
import p2p2 from '../assets/images/p2p2.png';
import p2p3 from '../assets/images/p2p3.jpg';
import p2p4 from '../assets/images/p2p4.png';


import p3p1 from '../assets/images/p3p1.jpg';

import p4p1 from '../assets/images/p4p1.png';
import p4p2 from '../assets/images/p4p2.png';
import p4p3 from '../assets/images/p4p3.png';


import p5p1 from '../assets/images/p5p1.png';
import p5p2 from '../assets/images/p5p2.png';
import p5p3 from '../assets/images/p5p3.png';
import p5p4 from '../assets/images/p5p4.png';
import p5p5 from '../assets/images/p5p5.png';

import p6p1 from '../assets/images/p6p1.avif';


const projectItems = {
    1: {
        title: "Malicious URL Detection System",
        mainImg: p1p3,
        img: [[p1p1, "Sign Up page"], [p1p2, "Log In page"], [p1p3, "Home page"], [p1p4, "Result Report"], [p1p5, "Previous reports list"]],
        skills: "Bootstrap, Django, Sklearn, Matplotlib",
        embedId: "rcDu1T8HFmk",
        githubLink: "https://github.com/abdogomaa201099/Malicious-URL-Detection-Website",
        disc: "The project main objectives are to build a machine learning model using the NLP functions to classify and detect the URLs as benign or malicious, then deploy the model into a website to be as a user interface to use that model. The user will make an account on the website and then they will be to input URLs and get the model result in PDF file. The user will be able to reach the previous result reports.",
        steps: ["Collecting the data from two datasets on Kaggle with about 1M sample of URLs.",
            "Preparing the collected data to be ready for training the model.",
            "Training the model using different Python libraries such as scikit-learn and NLTK.",
            "Building the website using Django framework.",
            "Deploy the model into the website."]
    },
    2: {
        title: "Titanic Problem",
        mainImg: p2p3,
        img: [[p2p1, "Snippet from the anaylsis: Checking the correletion of features with the target feature(survived)"], [p2p4, "Show the destribution curve of the Age feature"], [p2p2, "Showing the model accuracies"]],
        skills: "Sklearn, Seaborn, Pandas",
        kaggleLink: "https://www.kaggle.com/code/abdelrahmangomaa/titanic-problem-beginner",
        disc: "The project is aiming to use a dataset of Titanic disaster passengers and prepare the data to train a model in order to predict some new data of passengers if they will survive or not.",
        steps: ["Cleaning data against any null or duplicate values to avoid misleading.",
            "Exploring the data to get deeper understanding.",
            "Extract new features that can help to get more accurate result.",
            "Use most popular ML algorithms to train the data to get the best model with highest accuracy.",
            "Use the best model to detect the passenger who will survive or not."]
    },
    3: {
        title: "Hand Number Recognizer",
        mainImg: p3p1,
        skills: "Tensorflow Object Detection API, LabelImg, OpenCV",
        githubLink: "https://github.com/abdogomaa201099/HandNumberRecognizer",
        embedId: "or9tPVRLCTc",
        disc: "The Hand Number Recognizer project employs TensorFlow's Object Detection API to recognize hand numbers in real-time video streams, allowing for a wide range of applications in sign language recognition and gesture-based user interfaces.",
        steps: ["Collecting data by capturing images to my hand with different conditions.",
            "Labeling the images using labelImg package.",
            "Applying the Transfer learning technique by downloading SSD pretrained model to use it with my data.",
            "Create label map file, generate TF records for the data, and update the SSD model config to be used in the training process.",
            "Installing the TF object detection API with its dependencies to use it in training the model.",
            "Training the model, then loading it from the last checkpoint generated to be tested.",
            "The model achieved awesome result with live stream despite the noisy background."
        ]
    },
    4: {
        title: "Fashion_mnist",
        mainImg: p4p1,
        img: [[p4p1, "Represnting samples of the dataset"], [p4p2, "Showing model result graph"], [p4p3, "Visualize the model prediction result; with colored green refer to correctly predicted and red for vise versa"]],
        skills: "Sklearn, Keras, Matplotlib",
        kaggleLink: "https://www.kaggle.com/code/abdelrahmangomaa/fashion-mnist-with-randomizedsearchcv",
        disc: "The project uses the RandomizedSearchCV technique to optimize hyperparameters for a machine learning model trained on the Fashion-MNIST dataset. This approach allows for efficient and automated tuning of the model, resulting in improved accuracy and performance on the task of classifying fashion items.",
        steps: ["Load and split the Fashion-MNIST dataset into training and testing sets.",
            "Define a baseline model architecture and parameter grid for RandomizedSearchCV.",
            "Set up and fit a RandomizedSearchCV object to search for the best hyperparameters for the model using the training data.",
            "Evaluate the model with the best hyperparameters on the testing data and visualize its prediction results."]
    },
    5: {
        title: "Multi-class Weather Image Classification",
        mainImg: p5p1,
        img: [[p5p2, "Representing samples from the dataset"], [p5p3, "Data augmentation result"], [p5p4, "Showing model result graph"], [p5p5, "Visualize the model prediction result; with colored green refer to correctly predicted and red for vise versa"]],
        skills: "Keras, CNN, Data Augmentation",
        kaggleLink: "https://www.kaggle.com/code/abdelrahmangomaa/multi-class-weather-image-classification",
        disc: "The project aims to classify weather images into different categories using CNN. The dataset consists of various weather images, such as cloudy, shine, and sunrise, and the model is trained on this data to accurately classify weather images.",
        steps: ["Loading and preprocess the weather image dataset by resizing, removing corrupted images, and augmenting images to enhance the model's accuracy.",
            "Split the dataset into training, evaluating, and testing sets.",
            "Define the Convolutional Neural Network (CNN) model architecture and compile it with appropriate loss and optimization functions.",
            "Train the model on the training dataset and evaluate it on the evaluating dataset to identify and fix performance issues if necessary.",
            "Test the model on new and unseen weather images using test set to evaluate its accuracy."
        ]
    },
    6: {
        title: "Sudoku Problem",
        mainImg: p6p1,
        skills: "Programming techniques, Problem Solving",
        githubLink: "https://github.com/abdogomaa201099/sudokuChallenge",
        disc: "A programming challenge involves developing an algorithm to solve Sudoku puzzles using problem-solving techniques. This requires understanding the rules of the game, applying logic and reasoning, and using search and optimization techniques to find the solution.",
        steps: ["Read and understand the rules and constraints of the Sudoku game.",
            "Implement an algorithm to solve the puzzle using different programing functions to do searching on three fronts; row, column, and subgrid.",
            "Initializing the grid with known values and apply the algorithm to iteratively filling in the unknown values.",
            "Verify the solution by checking that each row, column, and subgrid of the grid contains the numbers 1 to 9 exactly once, and that the solution satisfies all constraints."
        ]
    }
};



export default projectItems;