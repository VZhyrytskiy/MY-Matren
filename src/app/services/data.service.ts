import { Injectable } from '@angular/core';

enum Languages {
  ru = 'ru',
  ua = 'ua'
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  options = {
    // выбранный язык
    language: Languages.ru,

    // класс
    class: 1,

    // номер темы
    topic: 1,

    // id задачи
    taskID: 70,

    // индекс подзадачи
    subtaskIndex: 0
  };

  data = {
    // первый класс
    1: {
      // тема 1
      1: {
        title: {
          ru: 'Сложение и вычитание без перехода через десяток',
          ua: 'Додавання та віднімання без переходу через десяток'
        },
        tasks: {
          // задача
          70: [
            // подзадача
            {
              // условие
              condition: {
                ru: 'Какие числа получатся, если взять 8 десятков и 5 единиц?',
                ua: 'Які числа отримаємо, якщо взяти 8 десятків і 5 одиниць?'
              },
              // варианты ответов
              cases: [85, 88, 58],
              // ответ
              answer: 85
            },
            {
              condition: {
                ru: 'Какие числа получатся, если взять 3 десятка и 6 единиц?',
                ua: 'Які числа отримаємо, якщо взяти 3 десятки і 6 одиниць?'
              },
              cases: [36, 63, 66],
              answer: 36
            },
            {
              condition: {
                ru: 'Какие числа получатся, если взять 9 десятков и 8 единиц?',
                ua: 'Які числа отримаємо, якщо взяти 9 десятків і 8 одиниць?'
              },
              cases: [88, 89, 98],
              answer: 98
            },
            {
              condition: {
                ru: 'Какие числа получатся, если взять 4 десятка и 4 единицы?',
                ua: 'Які числа отримаємо, якщо взяти 4 десятки і 4 одиниці?'
              },
              cases: [44, 88, 40],
              answer: 44
            }
          ],
          71: [
            {
              condition: {
                ru: '20 + 5',
                ua: '20 + 5'
              },
              cases: [20, 25, 52],
              answer: 25
            },
            {
              condition: {
                ru: '40 + 8',
                ua: '40 + 8'
              },
              cases: [8, 84, 48],
              answer: 48
            }
          ],
          75: [
            {
              condition: {
                ru:
                  'В большой коробке 20 карандашей, а в двух маленьких по 4 карандаша в каждой. Сколько карандашей во всех коробках?',
                ua:
                  'У великій коробці 20 олівців, а в двох маленьких по 4 олівці в кожній. Скільки олівців у всіх коробках?'
              },
              cases: [24, 28, 22],
              answer: 28
            }
          ]
        }
      }
    },
    // второй класс
    2: {}
  };

  // метод устанавливает язык
  setLanguage(language: Languages): void {
    this.options.language = language;
  }

  // метод устанавливает класс
  setClass(selectedClass: number): void {
    this.options.class = selectedClass;
  }

  setTopic(topic: number): void {
    this.options.topic = topic;
  }

  // метод возвращает название темы
  getTopicTitle(): string {
    return this.data[this.options.class][this.options.topic].title[
      this.options.language
    ];
  }

  // метод возвращает задачу
  getTask(taskID: number): any {
    if (!taskID) {
      return;
    }
    return this.data[this.options.class][this.options.topic].tasks[taskID];
  }

  getTaskID(): number {
    return this.options.taskID;
  }

  // метод возвращает количество подзадач
  getSubtasksCount(task: Array<any>): number {
    return task.length;
  }

  // метод возвращает следующую подзадачу
  getSubtask(task: Array<any>): any {
    return task[this.options.subtaskIndex];
  }

  // метод возвращает индекс следующей подзадачи
  getNextSubtaskIndex(task: Array<any>): number {
    if (this.options.subtaskIndex < this.getSubtasksCount(task) - 1) {
      this.options.subtaskIndex++;
    } else {
      this.options.taskID++;
      this.options.subtaskIndex = 0;
    }
    return this.options.subtaskIndex;
  }

  // метод возвращает условие подзадачи
  getSubtaskCondition(subtask: any): string {
    return subtask.condition[this.options.language];
  }

  // метод возвращает варианты ответов
  getSubtaskCases(subtask: any): Array<any> {
    return subtask.cases;
  }

  // метод проверяет ответ
  checkAnswer(subtask: any, answer: any): boolean {
    return subtask.answer === answer ? true : false;
  }
}
