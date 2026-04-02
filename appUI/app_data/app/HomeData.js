import {PageIeltsChildhood} from '../languages/ielts/ShareIELTS';
import {PageIeltsFamily} from '../languages/ielts/ShareIELTS';
import {PageIeltsHometown} from '../languages/ielts/ShareIELTS';
import {PageIeltsWork} from '../languages/ielts/ShareIELTS';
import {PageIeltsHomeAndFitness} from '../languages/ielts/ShareIELTS';
import {PageIeltsTheNaturalWord} from '../languages/ielts/ShareIELTS';
import {PageIeltsModernSociety} from '../languages/ielts/ShareIELTS';
import {PageIeltsFashion} from '../languages/ielts/ShareIELTS';
import {PageIeltsStudentLife} from '../languages/ielts/ShareIELTS';
import {PageIeltsComputerAndTechnology} from '../languages/ielts/ShareIELTS';
import {PageIeltsArts} from '../languages/ielts/ShareIELTS';
import {PageIeltsSpace} from '../languages/ielts/ShareIELTS';
import {PageIeltsLawAndOrder} from '../languages/ielts/ShareIELTS';
import {PageIeltsFood} from '../languages/ielts/ShareIELTS';
import {PageIeltsTravelPhrases} from '../languages/ielts/ShareIELTS';
import {PageIeltsWorkPhrases} from '../languages/ielts/ShareIELTS';
import {PageIeltsPhonePhrases} from '../languages/ielts/ShareIELTS';
import {PageIeltsHomePhrases} from '../languages/ielts/ShareIELTS';
import {PageIeltsCookingPhrases} from '../languages/ielts/ShareIELTS';
import {PageIeltsRoutinesPhrases} from '../languages/ielts/ShareIELTS';
import {PageIeltsHealthPhrases} from '../languages/ielts/ShareIELTS';
import {PageIeltsExercisePhrases} from '../languages/ielts/ShareIELTS';
import {PageIeltsTransportPhrases} from '../languages/ielts/ShareIELTS';
import {PageIeltsEnvironmentPhrases} from '../languages/ielts/ShareIELTS';
import {PageIeltsShoppingPhrases} from '../languages/ielts/ShareIELTS';
import {PageIeltsMoneyPhrases} from '../languages/ielts/ShareIELTS';
import {PageIeltsSleepPhrases} from '../languages/ielts/ShareIELTS';
import {PageIeltsEducationPhrases} from '../languages/ielts/ShareIELTS';
import {PageIeltsPartiesPhrases} from '../languages/ielts/ShareIELTS';
import {PageIeltsChildhoodPhrases} from '../languages/ielts/ShareIELTS';
import {PageIeltsTransport} from '../languages/ielts/ShareIELTS';

import { PageOneOFInitial } from '../initial/PageOneOFInitial';
import { PageTwoOFInitial } from '../initial/PageTwoOFInitial';
import { PageThreeOFInitial } from '../initial/PageThreeOFInitial';
import { PageFourOFInitial } from '../initial/PageFourOFInitial';
import { PageFiveOFInitial } from '../initial/PageFiveOFInitial';
import { PageSixOFInitial } from '../initial/PageSixOFInitial';
import { PageSevenOFInitial } from '../initial/PageSevenOFInitial';
import { PageEightOFInitial } from '../initial/PageEightOFInitial';
import { PageNineOFInitial } from '../initial/PageNineOFInitial';
import { PageTenOFInitial } from '../initial/PageTenOFInitial';
import { PageElevenOFInitial } from '../initial/PageElevenOFInitial';

import { PageOneOfAdvance } from '../advance/PageOneOfAdvance';
import { PageTwoOfAdvance } from '../advance/PageTwoOfAdvance';
import { PageThreeOfAdvance } from '../advance/PageThreeOfAdvance';
import { PageFourOfAdvance } from '../advance/PageFourOfAdvance';
import { PageFiveOfAdvance } from '../advance/PageFiveOfAdvance';
import { PageSixOfAdvance } from '../advance/PageSixOfAdvance';
import { PageSevenOfAdvance } from '../advance/PageSevenOfAdvance';
import { PageEightOfAdvance } from '../advance/PageEightOfAdvance';

import { PageOneOfWritingSingle } from '../writing/single/PageOneOfWritingSingle';
import { PageTwoOfWritingSingle } from '../writing/single/PageTwoOfWritingSingle';
import { PageThreeOfWritingSingle } from '../writing/single/PageThreeOfWritingSingle';
import { PageFourOfWritingSingle } from '../writing/single/PageFourOfWritingSingle';
import { PageFiveOfWritingSingle } from '../writing/single/PageFiveOfWritingSingle';

import { PageOneOfWritingPhrase } from '../writing/phrase/PageOneOfWritingPhrase';
import { PageTwoOfWritingPhrase } from '../writing/phrase/PageTwoOfWritingPhrase';
import { PageThreeOfWritingPhrase } from '../writing/phrase/PageThreeOfWritingPhrase';

import { PageListeningWords } from '../languages/genaral/ShareItems';

import { PageOneOfSpokenSingle } from '../spoken/single/PageOneOfSpokenSingle';
import { PageTwoOfSpokenSingle } from '../spoken/single/PageTwoOfSpokenSingle';
import { PageThreeOfSpokenSingle } from '../spoken/single/PageThreeOfSpokenSingle';

import { PageOneOfSpokenPhrase } from '../spoken/phrase/PageOneOfSpokenPhrase';
import { PageTwoOfSpokenPhrase } from '../spoken/phrase/PageTwoOfSpokenPhrase';

export const EnglishCoreFeaturesData = {
  title: 'English core features',
  subTitle: 'Essential words you need to pass any language exam.',
  features: [
    {
      name: 'English Ultimate Vocabulary',
      description: 'Supporting 1.5m students',
      message:
        'Vocabulary is the key to success in English tests and daily communication. Learn essential words with second-language support to improve quickly and effectively.',
      imageURL: require('../../app_assets/img/completeVocab.png'),
      visitPage: 'Category',
      bgColor: '#876F97',
      filterDataName: 'ultimateVocabData',
    },
    {
      name: 'Writing Vocabulary',
      description: 'Supporting 1m students',
      message:
        'Strong writing vocabulary helps you express ideas clearly, organize sentences better, and achieve higher scores in exams like IELTS, TOEFL, PTE, and etc.',
      imageURL: require('../../app_assets/img/writingVocabulary.png'),
      visitPage: 'Category',
      bgColor: '#BF7F55',
      filterDataName: 'writingVocabData',
    },
    {
      name: 'Listening Practice',
      description: 'Supporting 3m students',
      message:
        'Train your ears to recognize English words, sounds, and sentences more easily',
      imageURL: require('../../app_assets/img/listeningPractice.png'),
      visitPage: 'Category',
      bgColor: '#727AB8',
      filterDataName: 'listeningVocabData',
    },
    {
      name: 'Speaking Vocabulary',
      description: 'Supporting 10m students',
      message:
        'Upgrade your speaking with smart vocabulary that helps you answer naturally, clearly, and confidently in real conversations and exams.',
      imageURL: require('../../app_assets/img/speakingVocabulary.png'),
      visitPage: 'Category',
      bgColor: '#2A347F',
      filterDataName: 'speakingVocabData',
    },
  ],
};

export const TopicWiseVocabData = {
  title: 'Topic wise vocabulary and phrases',
  subTitle: 'Essential words you need to pass any language exam.',
  features: [
    {
      name: 'Childhood',
      description: '',
      data: PageIeltsChildhood,
      visitPage: 'Search',
      color: '',
    },
    {
      name: 'Family',
      description: '',
      data: PageIeltsFamily,
      visitPage: 'Search',
      color: '',
    },
    {
      name: 'Home town',
      description: '',
      data: PageIeltsHometown,
      visitPage: 'Search',
      color: '',
    },
    {
      name: 'Work',
      description: '',
      data: PageIeltsWork,
      visitPage: 'Search',
      color: '',
    },
    {
      name: 'Home and fitness',
      description: '',
      data: PageIeltsHomeAndFitness,
      visitPage: 'Search',
      color: '',
    },
    {
      name: 'The natural word',
      description: '',
      data: PageIeltsTheNaturalWord,
      visitPage: 'Search',
      color: '',
    },
    {
      name: 'Modern society',
      description: '',
      data: PageIeltsModernSociety,
      visitPage: 'Search',
      color: '',
    },
    {
      name: 'Fashion',
      description: '',
      data: PageIeltsFashion,
      visitPage: 'Search',
      color: '',
    },
    {
      name: 'Student life',
      description: '',
      data: PageIeltsStudentLife,
      visitPage: 'Search',
      color: '',
    },
    {
      name: 'Computer and technology',
      description: '',
      data: PageIeltsComputerAndTechnology,
      visitPage: 'Search',
      color: '',
    },
    {
      name: 'Transport',
      description: '',
      data: PageIeltsTransport,
      visitPage: 'Search',
      color: '',
    },
    {
      name: 'Arts',
      description: '',
      data: PageIeltsArts,
      visitPage: 'Search',
      color: '',
    },
    {
      name: 'Space',
      description: '',
      data: PageIeltsSpace,
      visitPage: 'Search',
      color: '',
    },
    {
      name: 'Law and order',
      description: '',
      data: PageIeltsLawAndOrder,
      visitPage: 'Search',
      color: '',
    },
    {
      name: 'Food',
      description: '',
      data: PageIeltsFood,
      visitPage: 'Search',
      color: '',
    },
    {
      name: 'Travel phrases',
      description: '',
      data: PageIeltsTravelPhrases,
      visitPage: 'Search',
      color: '',
    },
    {
      name: 'Work phrases',
      description: '',
      data: PageIeltsWorkPhrases,
      visitPage: 'Search',
      color: '',
    },
    {
      name: 'Phone phrases',
      description: '',
      data: PageIeltsPhonePhrases,
      visitPage: 'Search',
      color: '',
    },
    {
      name: 'Home Phrases',
      description: '',
      data: PageIeltsHomePhrases,
      visitPage: 'Search',
      color: '',
    },
    {
      name: 'Cooking Phrases',
      description: '',
      data: PageIeltsCookingPhrases,
      visitPage: 'Search',
      color: '',
    },
    {
      name: 'Routines phrases',
      description: '',
      data: PageIeltsRoutinesPhrases,
      visitPage: 'Search',
      color: '',
    },
    {
      name: 'Health phrases',
      description: '',
      data: PageIeltsHealthPhrases,
      visitPage: 'Search',
      color: '',
    },
    {
      name: 'Exercise phrases',
      description: '',
      data: PageIeltsExercisePhrases,
      visitPage: 'Search',
      color: '',
    },
    {
      name: 'Transport phrases',
      description: '',
      data: PageIeltsTransportPhrases,
      visitPage: 'Search',
      color: '',
    },
    {
      name: 'Environment phrases',
      description: '',
      data: PageIeltsEnvironmentPhrases,
      visitPage: 'Search',
      color: '',
    },
    {
      name: 'Shopping phrases',
      description: '',
      data: PageIeltsShoppingPhrases,
      visitPage: 'Search',
      color: '',
    },
    {
      name: 'Money phrases',
      description: '',
      data: PageIeltsMoneyPhrases,
      visitPage: 'Search',
      color: '',
    },
    {
      name: 'Sleep phrases',
      description: '',
      data: PageIeltsSleepPhrases,
      visitPage: 'Search',
      color: '',
    },
    {
      name: 'Education phrases',
      description: '',
      data: PageIeltsEducationPhrases,
      visitPage: 'Search',
      color: '',
    },
    {
      name: 'Parties phrases',
      description: '',
      data: PageIeltsPartiesPhrases,
      visitPage: 'Search',
      color: '',
    },
    {
      name: 'Childhood phrases',
      description: '',
      data: PageIeltsChildhoodPhrases,
      visitPage: 'Search',
      color: '',
    },
  ],
};

export const ultimateVocabData = [
  {
    name: 'basic',
    arrayData: [
      ...PageOneOFInitial,
      ...PageTwoOFInitial,
      ...PageThreeOFInitial,
      ...PageFourOFInitial,
      ...PageFiveOFInitial,
      ...PageSixOFInitial,
      ...PageSevenOFInitial,
      ...PageEightOFInitial,
      ...PageNineOFInitial,
      ...PageTenOFInitial,
      ...PageElevenOFInitial,
    ],
  },
  {
    name: 'Advance',
    arrayData: [
      ...PageEightOfAdvance,
      ...PageFiveOfAdvance,
      ...PageFourOfAdvance,
      ...PageOneOfAdvance,
      ...PageSevenOfAdvance,
      ...PageSixOfAdvance,
      ...PageThreeOfAdvance,
      ...PageTwoOfAdvance,
    ],
  },
];

export const writingVocabData = [
  {
    name: 'basic',
    arrayData: [
      ...PageOneOfWritingSingle,
      ...PageTwoOfWritingSingle,
      ...PageThreeOfWritingSingle,
      ...PageFourOfWritingSingle,
      ...PageFiveOfWritingSingle,
    ],
  },
  {
    name: 'phrases',
    arrayData: [
      ...PageOneOfWritingPhrase,
      ...PageThreeOfWritingPhrase,
      ...PageTwoOfWritingPhrase,
    ],
  },
];

export const listeningVocabData = [
  {
    name: 'general',
    arrayData: [...PageListeningWords],
  },
];

export const speakingVocabData = [
  {
    name: 'basic',
    arrayData: [
      ...PageOneOfSpokenSingle,
      ...PageTwoOfSpokenSingle,
      ...PageThreeOfSpokenSingle,
    ],
  },
  {
    name: 'phrases',
    arrayData: [...PageOneOfSpokenPhrase, ...PageTwoOfSpokenPhrase],
  },
];
