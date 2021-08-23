/* Variables : 페이지 작동에 필요한 변수들
 */

// SCHEDULE CLASS MAP
let SCHEDULES = [];
let SCHEDULE_HTMLS = '';
// DEVICE IDX
const DEVICE_IDX_SPRIN_1 = '1';
const DEVICE_IDX_SPRIN_2 = '2';
const DEVICE_IDX_SPRIN_3 = '3';
const DEVICE_IDX_SPRIN_4 = '4';
const DEVICE_IDX_SPRIN_5 = '5';
const DEVICE_IDX_SPRIN_6 = '6';
// 시작 대기
let waitCreat_schedulerName = '테스트 스케줄 ';
let waitCreat_operationDate_mon = '0';
let waitCreat_operationDate_twe = '0';
let waitCreat_operationDate_wen = '0';
let waitCreat_operationDate_thr = '0';
let waitCreat_operationDate_fri = '0';
let waitCreat_operationDate_set = '0';
let waitCreat_operationDate_sun = '0';
let waitCreat_spk_1 = '0';
let waitCreat_spk_2 = '0';
let waitCreat_spk_3 = '0';
let waitCreat_spk_4 = '0';
let waitCreat_spk_5 = '0';
let waitCreat_spk_6 = '0';
let waitCreat_startTime = '0000';
let waitCreat_endTime = '0000';
let waitCreat_operationTime = '0000';

/* Functions : 페이지가 작동하는데 필요한 함수들 */

// 로컬 스토리지 토큰 유무 체크
function checkToken() {
  const loginToken = localStorage.getItem('access_token');
  if (loginToken === undefined) {
    alert('로그인이 필요합니다');
    location.href = 'index.html';
  }
}
// 파로타 axios 인스턴스 생성
function getFarotaAxios() {
  const farota = axios.create({
    baseURL: 'https://dongsung.farota.com/api/',
    headers: { 'X-Authorization': 'Bearer ' + userToken },
  });
  return farota;
}

// Rarota CRUD - Functions
function getURIReadSchedulerList() {
  return `/scheduler`;
}
function getURICreateScheduler() {
  return `/scheduler`;
}
function getURIReadSchedulerInfo(schedulerIdx) {
  return `/scheduler/${schedulerIdx}`;
}
function getURIUpdateSchedulerInfo(schedulerIdx) {
  return `/scheduler/${schedulerIdx}`;
}
function getURIDeleteScheduler(schedulerIdx) {
  return `/scheduler/${schedulerIdx}`;
}
function getURIUpdateSchedulerStatus(schedulerIdx) {
  return `/scheduler/${schedulerIdx}/status`;
}
function getURIExceptDevice(schedulerIdx, deviceIdx) {
  return `/scheduler/${schedulerIdx}/${deviceIdx}/delete`;
}
function getURIAddDevice(schedulerIdx, deviceIdx) {
  return `/scheduler/${schedulerIdx}/${deviceIdx}/create`;
}

// 요일 선택
// 요일 선택
function selectDaysMon(this_id) {
  const cssClass = $(`#` + this_id).attr('class');
  switch (cssClass) {
    case 'sd-days-off':
      // 클레스를 온으로 바꾼다
      $(`#` + this_id).attr('class', 'sd-days-on');
      // 생성대기 변수의 값을 1로 바꾼다
      waitCreat_operationDate_mon = '1';
      break;
    case 'sd-days-on':
      // 클레스를 온으로 바꾼다
      $(`#` + this_id).attr('class', 'sd-days-off');
      // 생성대기 변수의 값을 1로 바꾼다
      waitCreat_operationDate_mon = '0';
      break;

    default:
      break;
  }
  console.log(this_id);
  console.log(cssClass);
  console.log(waitCreat_operationDate_mon);
}
function selectDaysTwe(this_id) {
  const cssClass = $(`#` + this_id).attr('class');
  switch (cssClass) {
    case 'sd-days-off':
      // 클레스를 온으로 바꾼다
      $(`#` + this_id).attr('class', 'sd-days-on');
      // 생성대기 변수의 값을 1로 바꾼다
      waitCreat_operationDate_twe = '1';
      break;
    case 'sd-days-on':
      // 클레스를 온으로 바꾼다
      $(`#` + this_id).attr('class', 'sd-days-off');
      // 생성대기 변수의 값을 1로 바꾼다
      waitCreat_operationDate_twe = '0';
      break;

    default:
      break;
  }
  console.log(this_id);
  console.log(cssClass);
  console.log(waitCreat_operationDate_twe);
}
function selectDaysWen(this_id) {
  const cssClass = $(`#` + this_id).attr('class');
  switch (cssClass) {
    case 'sd-days-off':
      // 클레스를 온으로 바꾼다
      $(`#` + this_id).attr('class', 'sd-days-on');
      // 생성대기 변수의 값을 1로 바꾼다
      waitCreat_operationDate_wen = '1';
      break;
    case 'sd-days-on':
      // 클레스를 온으로 바꾼다
      $(`#` + this_id).attr('class', 'sd-days-off');
      // 생성대기 변수의 값을 1로 바꾼다
      waitCreat_operationDate_wen = '0';
      break;

    default:
      break;
  }
  console.log(this_id);
  console.log(cssClass);
  console.log(waitCreat_operationDate_wen);
}
function selectDaysThr(this_id) {
  const cssClass = $(`#` + this_id).attr('class');
  switch (cssClass) {
    case 'sd-days-off':
      // 클레스를 온으로 바꾼다
      $(`#` + this_id).attr('class', 'sd-days-on');
      // 생성대기 변수의 값을 1로 바꾼다
      waitCreat_operationDate_thr = '1';
      break;
    case 'sd-days-on':
      // 클레스를 온으로 바꾼다
      $(`#` + this_id).attr('class', 'sd-days-off');
      // 생성대기 변수의 값을 1로 바꾼다
      waitCreat_operationDate_thr = '0';
      break;

    default:
      break;
  }
  console.log(this_id);
  console.log(cssClass);
  console.log(waitCreat_operationDate_thr);
}
function selectDaysFri(this_id) {
  const cssClass = $(`#` + this_id).attr('class');
  switch (cssClass) {
    case 'sd-days-off':
      // 클레스를 온으로 바꾼다
      $(`#` + this_id).attr('class', 'sd-days-on');
      // 생성대기 변수의 값을 1로 바꾼다
      waitCreat_operationDate_fri = '1';
      break;
    case 'sd-days-on':
      // 클레스를 온으로 바꾼다
      $(`#` + this_id).attr('class', 'sd-days-off');
      // 생성대기 변수의 값을 1로 바꾼다
      waitCreat_operationDate_fri = '0';
      break;
      break;

    default:
  }
  console.log(this_id);
  console.log(cssClass);
  console.log(waitCreat_operationDate_fri);
}
function selectDaysSat(this_id) {
  const cssClass = $(`#` + this_id).attr('class');
  switch (cssClass) {
    case 'sd-days-off':
      // 클레스를 온으로 바꾼다
      $(`#` + this_id).attr('class', 'sd-days-on');
      // 생성대기 변수의 값을 1로 바꾼다
      waitCreat_operationDate_set = '1';
      break;
    case 'sd-days-on':
      // 클레스를 온으로 바꾼다
      $(`#` + this_id).attr('class', 'sd-days-off');
      // 생성대기 변수의 값을 1로 바꾼다
      waitCreat_operationDate_set = '0';
      break;

    default:
      break;
  }
  console.log(this_id);
  console.log(cssClass);
  console.log(waitCreat_operationDate_set);
}
function selectDaysSun(this_id) {
  const cssClass = $(`#` + this_id).attr('class');
  switch (cssClass) {
    case 'sd-days-off':
      // 클레스를 온으로 바꾼다
      $(`#` + this_id).attr('class', 'sd-days-on');
      // 생성대기 변수의 값을 1로 바꾼다
      waitCreat_operationDate_sun = '1';
      break;
    case 'sd-days-on':
      // 클레스를 온으로 바꾼다
      $(`#` + this_id).attr('class', 'sd-days-off');
      // 생성대기 변수의 값을 1로 바꾼다
      waitCreat_operationDate_sun = '0';
      break;

    default:
      break;
  }
  console.log(this_id);
  console.log(cssClass);
  console.log(waitCreat_operationDate_sun);
}

// 스케줄 생성
// 이름입력
const inputCompName = document.getElementById('sd-set-scheduler-name');
inputCompName.addEventListener('focusout', () => {
  // console.log('i can leasson!');
  // console.log(inputCompStartTime.value);
  // console.log(inputCompStartTime.value.substring(0, 2));
  // console.log(inputCompStartTime.value.substring(3, 5));
  const schedulerName = inputCompName.value;
  // console.log(startTime);
  waitCreat_schedulerName = schedulerName;
  console.log(waitCreat_schedulerName);
});

// 시작시간
const inputCompStartTime = document.getElementById('sd-set-times-start');
inputCompStartTime.addEventListener('focusout', () => {
  // console.log('i can leasson!');
  // console.log(inputCompStartTime.value);
  // console.log(inputCompStartTime.value.substring(0, 2));
  // console.log(inputCompStartTime.value.substring(3, 5));
  const startTime =
    inputCompStartTime.value.substring(0, 2) +
    inputCompStartTime.value.substring(3, 5);
  // console.log(startTime);
  waitCreat_startTime = parseInt(startTime);
  // console.log(waitCreat_startTime);
});
// 종료시간
const inputCompEndTime = document.getElementById('sd-set-times-end');
inputCompEndTime.addEventListener('focusout', () => {
  // console.log('i can leasson!');
  // console.log(inputCompEndTime.value);
  // console.log(inputCompEndTime.value.substring(0, 2));
  // console.log(inputCompEndTime.value.substring(3, 5));
  const endTime =
    inputCompEndTime.value.substring(0, 2) +
    inputCompEndTime.value.substring(3, 5);
  // console.log(endTime);
  waitCreat_endTime = parseInt(endTime);
  // console.log(waitCreat_endTime);
});
// 장치당 운영시간
const inputCompOperationTime = document.getElementById(
  'sd-set-times-operation'
);
inputCompOperationTime.addEventListener('focusout', () => {
  // console.log('i can leasson!');
  // console.log(inputCompOperationTime.value);
  // console.log(inputCompOperationTime.value.substring(0, 2));
  // console.log(inputCompOperationTime.value.substring(3, 5));
  const operationTime =
    inputCompOperationTime.value.substring(0, 2) +
    inputCompOperationTime.value.substring(3, 5);
  // console.log(operationTime);
  waitCreat_operationTime = parseInt(operationTime);
  // console.log(waitCreat_operationTime);
});

// 장치선택
// 스프링클러 1
const divCompSelectSpk1 = document.getElementById('sd-device-spk-1');
divCompSelectSpk1.addEventListener('click', () => {
  const cssClass = $(`#sd-device-spk-1`).attr('class');
  switch (cssClass) {
    case 'sd-devices-off':
      // 클레스를 온으로 바꾼다
      $(`#sd-device-spk-1`).attr('class', 'sd-devices-on');
      // 생성대기 변수의 값을 1로 바꾼다
      waitCreat_spk_1 = '1';
      break;
    case 'sd-devices-on':
      // 클레스를 온으로 바꾼다
      $(`#sd-device-spk-1`).attr('class', 'sd-devices-off');
      // 생성대기 변수의 값을 1로 바꾼다
      waitCreat_spk_1 = '0';
      break;

    default:
      break;
  }
  console.log(cssClass);
  console.log(waitCreat_spk_1);
});
// 스프링클러 2
const divCompSelectSpk2 = document.getElementById('sd-device-spk-2');
divCompSelectSpk2.addEventListener('click', () => {
  const cssClass = $(`#sd-device-spk-2`).attr('class');
  switch (cssClass) {
    case 'sd-devices-off':
      // 클레스를 온으로 바꾼다
      $(`#sd-device-spk-2`).attr('class', 'sd-devices-on');
      // 생성대기 변수의 값을 1로 바꾼다
      waitCreat_spk_2 = '1';
      break;
    case 'sd-devices-on':
      // 클레스를 온으로 바꾼다
      $(`#sd-device-spk-2`).attr('class', 'sd-devices-off');
      // 생성대기 변수의 값을 1로 바꾼다
      waitCreat_spk_2 = '0';
      break;

    default:
      break;
  }
  console.log(cssClass);
  console.log(waitCreat_spk_2);
});
// 스프링클러 3
const divCompSelectSpk3 = document.getElementById('sd-device-spk-3');
divCompSelectSpk3.addEventListener('click', () => {
  const cssClass = $(`#sd-device-spk-3`).attr('class');
  switch (cssClass) {
    case 'sd-devices-off':
      // 클레스를 온으로 바꾼다
      $(`#sd-device-spk-3`).attr('class', 'sd-devices-on');
      // 생성대기 변수의 값을 1로 바꾼다
      waitCreat_spk_3 = '1';
      break;
    case 'sd-devices-on':
      // 클레스를 온으로 바꾼다
      $(`#sd-device-spk-3`).attr('class', 'sd-devices-off');
      // 생성대기 변수의 값을 1로 바꾼다
      waitCreat_spk_3 = '0';
      break;

    default:
      break;
  }
  console.log(cssClass);
  console.log(waitCreat_spk_3);
});
// 스프링클러 4
const divCompSelectSpk4 = document.getElementById('sd-device-spk-4');
divCompSelectSpk4.addEventListener('click', () => {
  const cssClass = $(`#sd-device-spk-4`).attr('class');
  switch (cssClass) {
    case 'sd-devices-off':
      // 클레스를 온으로 바꾼다
      $(`#sd-device-spk-4`).attr('class', 'sd-devices-on');
      // 생성대기 변수의 값을 1로 바꾼다
      waitCreat_spk_4 = '1';
      break;
    case 'sd-devices-on':
      // 클레스를 온으로 바꾼다
      $(`#sd-device-spk-4`).attr('class', 'sd-devices-off');
      // 생성대기 변수의 값을 1로 바꾼다
      waitCreat_spk_4 = '0';
      break;

    default:
      break;
  }
  console.log(cssClass);
  console.log(waitCreat_spk_4);
});
// 스프링클러 5
const divCompSelectSpk5 = document.getElementById('sd-device-spk-5');
divCompSelectSpk5.addEventListener('click', () => {
  const cssClass = $(`#sd-device-spk-5`).attr('class');
  switch (cssClass) {
    case 'sd-devices-off':
      // 클레스를 온으로 바꾼다
      $(`#sd-device-spk-5`).attr('class', 'sd-devices-on');
      // 생성대기 변수의 값을 1로 바꾼다
      waitCreat_spk_5 = '1';
      break;
    case 'sd-devices-on':
      // 클레스를 온으로 바꾼다
      $(`#sd-device-spk-5`).attr('class', 'sd-devices-off');
      // 생성대기 변수의 값을 1로 바꾼다
      waitCreat_spk_5 = '0';
      break;

    default:
      break;
  }
  console.log(cssClass);
  console.log(waitCreat_spk_5);
});
// 스프링클러 6
const divCompSelectSpk6 = document.getElementById('sd-device-spk-6');
divCompSelectSpk6.addEventListener('click', () => {
  const cssClass = $(`#sd-device-spk-6`).attr('class');
  switch (cssClass) {
    case 'sd-devices-off':
      // 클레스를 온으로 바꾼다
      $(`#sd-device-spk-6`).attr('class', 'sd-devices-on');
      // 생성대기 변수의 값을 1로 바꾼다
      waitCreat_spk_6 = '1';
      break;
    case 'sd-devices-on':
      // 클레스를 온으로 바꾼다
      $(`#sd-device-spk-6`).attr('class', 'sd-devices-off');
      // 생성대기 변수의 값을 1로 바꾼다
      waitCreat_spk_6 = '0';
      break;

    default:
      break;
  }
  console.log(cssClass);
  console.log(waitCreat_spk_6);
});

/* Class : 페이지가 작동하는데 필요한 함수들 */

class Schedule {
  schedulerIdx = '000';
  schedulerName = 'defualt Schedule';
  status = '00';
  mapIndex = '000';
  startTime = '0000';
  endTime = '0000';
  operationTime = '0000';
  operationDate = '0000000';
  statusDevice1 = 0;
  statusDevice2 = 0;
  statusDevice3 = 0;
  statusDevice4 = 0;
  statusDevice5 = 0;
  statusDevice6 = 0;
  deviceList = '000000';
  deviceNum = 0;

  constructor(
    scheduler_idx,
    scheduler_name,
    status,
    map_index,
    operation_date,
    start_time,
    end_time,
    operation_time,
    deviceList
  ) {
    this.schedulerIdx = scheduler_idx;
    this.schedulerName = scheduler_name;
    this.status = status;
    this.mapIndex = map_index;
    this.startTime = start_time;
    this.endTime = end_time;
    this.operationTime = operation_time;
    this.operationDate = operation_date;
    // Device Var
    this.deviceList = deviceList;
    for (let i = 0; i < this.deviceList.length; i++) {
      const deviceIdx = this.deviceList[i].device_idx;
      switch (deviceIdx) {
        case 1:
          this.statusDevice1 = 1;
          this.deviceNum++;
          break;
        case 2:
          this.statusDevice2 = 1;
          this.deviceNum++;
          break;
        case 3:
          this.statusDevice3 = 1;
          this.deviceNum++;
          break;
        case 4:
          this.statusDevice4 = 1;
          this.deviceNum++;
          break;
        case 5:
          this.statusDevice5 = 1;
          this.deviceNum++;
          break;
        case 6:
          this.statusDevice6 = 1;
          this.deviceNum++;
          break;
        default:
          break;
      }
    }
  }
  // getter & setter -> 추후 고도화 할 경우에 추가
  /**
   * Get Schedule Name
   * @date 2021-08-22
   * @returns {string}
   */
  get schedulerName() {
    return this._schedulerName;
  }
  /**
   * Get Schedule Status
   * @date 2021-08-22
   * @returns {string}
   */
  get status() {
    return this._status;
  }
  /**
   * Get Schedule Map-Index
   * @date 2021-08-22
   * @returns {string}
   */
  get mapIndex() {
    return this._mapIndex;
  }
  /**
   * Get Schedule SchedulerIdx
   * @date 2021-08-22
   * @returns {string}
   */
  get schedulerIdx() {
    return this._schedulerIdx;
  }
  /**
   * Get Schedule Start-Time
   * @date 2021-08-22
   * @returns {string}
   */
  get startTime() {
    return this._startTime;
  }
  /**
   * Get Schedule End-Time
   * @date 2021-08-22
   * @returns {string}
   */
  get endTime() {
    return this._endTime;
  }
  /**
   * Get Schedule Operation-Time
   * @date 2021-08-22
   * @returns {string}
   */
  get operationTime() {
    return this._operationTime;
  }
  /**
   * Get Schedule Operation-Date
   * @date 2021-08-22
   * @returns {string}
   */
  get sperationDate() {
    return this._operationDate;
  }
  /**
   * Get Schedule Device-1-Status
   * @date 2021-08-22
   * @returns {string}
   */
  get statusDevice1() {
    return this._statusDevice1;
  }
  /**
   * Get Schedule Device-2-Status
   * @date 2021-08-22
   * @returns {string}
   */
  get statusDevice2() {
    return this._statusDevice2;
  }
  /**
   * Get Schedule Device-3-Status
   * @date 2021-08-22
   * @returns {string}
   */
  get statusDevice3() {
    return this._statusDevice3;
  }
  /**
   * Get Schedule Device-4-Status
   * @date 2021-08-22
   * @returns {string}
   */
  get statusDevice4() {
    return this._statusDevice4;
  }
  /**
   * Get Schedule Device-5-Status
   * @date 2021-08-22
   * @returns {string}
   */
  get statusDevice5() {
    return this._statusDevice5;
  }
  /**
   * Get Schedule Device-6-Status
   * @date 2021-08-22
   * @returns {string}
   */
  get statusDevice6() {
    return this._statusDevice6;
  }

  /**
   * Get Schedule Device-List
   * @date 2021-08-22
   * @returns {string}
   */
  get deviceList() {
    return this._deviceList;
  }

  /**
   * Get Schedule Device-Number
   * @date 2021-08-22
   * @returns {string}
   */
  get deviceNum() {
    return this._deviceNum;
  }

  // Setters
  set schedulerIdx(value) {
    this.schedulerIdx = value;
  }
  /**
   * Set Schedule Name
   * @date 2021-08-22
   * @param {string} value
   */
  set schedulerName(value) {
    this._schedulerName = value;
  }
  /**
   * Set Schedule Status
   * @date 2021-08-22
   * @param {string} value
   */
  set status(value) {
    this._status = value;
  }
  /**
   * Set Schedule Map Index
   * @date 2021-08-22
   * @param {string} value
   */
  set mapIndex(value) {
    this._mapIndex = value;
  }
  /**
   * Set Schedule Strat-Time
   * @date 2021-08-22
   * @param {string} value
   */
  set startTime(value) {
    this._startTime = value;
  }
  /**
   * Set Schedule End-Time
   * @date 2021-08-22
   * @param {string} value
   */
  set endTime(value) {
    this._endTime = value;
  }
  /**
   * Set Schedule Operation-Time
   * @date 2021-08-22
   * @param {string} value
   */
  set operationTime(value) {
    this._operationTime = value;
  }
  /**
   * Set Schedule Operation-Date
   * @date 2021-08-22
   * @param {string} value
   */
  set operationDate(value) {
    this._operationDate = value;
  }
  /**
   * Set Schedule Device 1 Status
   * @date 2021-08-22
   * @param {string} value
   */
  set statusDevice1(value) {
    this._statusDevice1 = value.toString();
  }
  /**
   * Set Schedule Device 2 Status
   * @date 2021-08-22
   * @param {string} value
   */
  set statusDevice2(value) {
    this._statusDevice2 = value.toString();
  }
  /**
   * Set Schedule Device 3 Status
   * @date 2021-08-22
   * @param {string} value
   */
  set statusDevice3(value) {
    this._statusDevice3 = value.toString();
  }
  /**
   * Set Schedule Device 4 Status
   * @date 2021-08-22
   * @param {string} value
   */
  set statusDevice4(value) {
    this._statusDevice4 = value.toString();
  }
  /**
   * Set Schedule Device 5 Status
   * @date 2021-08-22
   * @param {string} value
   */
  set statusDevice5(value) {
    this._statusDevice5 = value.toString();
  }
  /**
   * Set Schedule Device 6 Status
   * @date 2021-08-22
   * @param {string} value
   */
  set statusDevice6(value) {
    this._statusDevice6 = value.toString();
  }
  /**
   * Set Schedule Device-List
   * @date 2021-08-22
   * @param {string} value
   */
  set deviceList(value) {
    this._deviceList = value;
  }

  /**
   * Set Schedule Device-List
   * @date 2021-08-22
   * @param {string} value
   */
  set deviceNum(value) {
    console.log('셋터가 작동합니다');
    this._deviceNum = value;
  }

  //method
  /**
   * STATIC : Create Scheduler
   * @date 2021-08-21
   * @param {string} scheduler_name
   * @param {string} operation_date
   * @param {object} device_list
   * @param {number} start_time
   * @param {number} end_time
   * @param {number} operation_time
   */
  static async createScheduler(
    scheduler_name,
    operation_date,
    device_list,
    start_time,
    end_time,
    operation_time
  ) {
    await farota.post(`/scheduler`, {
      scheduler_name: scheduler_name,
      operation_date: operation_date,
      device_list: device_list,
      start_time: start_time,
      end_time: end_time,
      operation_time: operation_time,
    });
    // console.log(`SUCCESS : create scheduler complete! : ` + scheduler_name);
  }
  static async readSchedulerList() {
    const schedulerList = await farota.get(getURIReadSchedulerList(), {});
    return schedulerList;
  }
  /**
   * Update Schedule Name
   * @date 2021-08-21
   * @param {string} scheduler_name
   * @returns {any}
   */
  async updateName(scheduler_name) {
    this.setSchedulerName();
    await farota.post(getURIUpdateSchedulerInfo(this.schedulerIdx), {
      scheduler_name: this.schedulerName,
      // operation_date: operationDate,
      // tart_time: startTime,
      // end_time: endTime,
      // operation_time: operationTime,
    });
  }
  /**
   * Update Schedule Operating Date Status about Mon to Sun
   * @date 2021-08-21
   * @param {string} scheduler_idx
   * @returns {any}
   */
  async updateScheduler() {
    await farota.put(`/scheduler/${this.schedulerIdx}`, {
      scheduler_name: this.schedulerName,
      operation_date: this.operationDate,
      device_list: this.deviceList,
      start_time: this.startTime,
      end_time: this.endTime,
      operation_time: this.operationTime,
    });
  }
  async addDevice() {}
  async exceptDevice() {}
  async deleteScheduler() {
    await farota.delete(getURIDeleteScheduler(this.schedulerIdx));
  }
  async startScheduler() {
    this.status = '10';
    await farota.post(`/scheduler/${this.schedulerIdx}/status`, {
      status: this.status,
    });
    console.log(this.status);
  }
  async stopScheduler() {
    this.status = '00';
    await farota.post(`/scheduler/${this.schedulerIdx}/status`, {
      status: this.status,
    });
    console.log(this.status);
  }

  assembleHtmltitle() {
    const status = this.status;
    console.log(status);
    let titleClass = '';
    switch (status) {
      case '10':
        titleClass = 'ds-title-scheduler-active';
        break;
      case '00':
        titleClass = 'ds-title-scheduler-deactive';
        break;

      default:
        break;
    }

    const title = `
    <h1 class = "${titleClass}">${this.schedulerName}</h1>
    <button onclick="deleteScheduler(this.id)" id = "sd-delete-btn-${this.mapIndex}" class="sd-delete-btn">삭제</button>
    <button onclick="startScheduler(this.id)" id = "sd-start-btn-${this.mapIndex}" class="sd-start-btn">시작</button>
    <button onclick="stopScheduler(this.id)" id = "sd-stop-btn-${this.mapIndex}" class="sd-stop-btn">정지</button>
    `;
    return title;
  }
  assembleHtmlDevice() {
    const active = 'sd-item-devices-on';
    const deactive = 'sd-item-devices-off';
    let device1Class = '';
    let device2Class = '';
    let device3Class = '';
    let device4Class = '';
    let device5Class = '';
    let device6Class = '';

    switch (this.statusDevice1) {
      case 0:
        device1Class = deactive;
        break;
      case 1:
        device1Class = active;
        break;
      default:
        break;
    }
    switch (this.statusDevice2) {
      case 0:
        device2Class = deactive;
        break;
      case 1:
        device2Class = active;
        break;
      default:
        break;
    }
    switch (this.statusDevice3) {
      case 0:
        device3Class = deactive;
        break;
      case 1:
        device3Class = active;
        break;
      default:
        break;
    }
    switch (this.statusDevice4) {
      case 0:
        device4Class = deactive;
        break;
      case 1:
        device4Class = active;
        break;
      default:
        break;
    }
    switch (this.statusDevice5) {
      case 0:
        device5Class = deactive;
        break;
      case 1:
        device5Class = active;
        break;
      default:
        break;
    }
    switch (this.statusDevice6) {
      case 0:
        device6Class = deactive;
        break;
      case 1:
        device6Class = active;
        break;
      default:
        break;
    }

    const device = `
      <div id="sd-item-spc-1-${this.mapIndex}" class="${device1Class}">
        <i class="fas fa-check-circle"></i> 스프링클러 1
      </div>
      <div id="sd-item-spc-2-${this.mapIndex}" class="${device2Class}">
        <i class="fas fa-check-circle"></i> 스프링클러 2
      </div>
      <div id="sd-item-spc-3-${this.mapIndex}" class="${device3Class}">
        <i class="fas fa-check-circle"></i> 스프링클러 3
      </div>
      <div id="sd-item-spc-4-${this.mapIndex}" class="${device4Class}">
        <i class="fas fa-check-circle"></i> 스프링클러 4
      </div>
      <div id="sd-item-spc-5-${this.mapIndex}" class="${device5Class}">
        <i class="fas fa-check-circle"></i> 스프링클러 5
      </div>
      <div id="sd-item-spc-6-${this.mapIndex}" class="${device6Class}">
        <i class="fas fa-check-circle"></i> 스프링클러 6
      </div>
    `;
    return device;
  }
  assembleHtmlDays() {
    const active = 'sd-item-days-on';
    const deactive = 'sd-item-days-off';
    let day1Class = '';
    let day2Class = '';
    let day3Class = '';
    let day4Class = '';
    let day5Class = '';
    let day6Class = '';
    let day7Class = '';

    switch (Number(this.operationDate.charAt(0))) {
      case 0:
        day1Class = deactive;
        break;
      case 1:
        day1Class = active;
        break;
      default:
        break;
    }

    switch (Number(this.operationDate.charAt(1))) {
      case 0:
        day2Class = deactive;
        break;
      case 1:
        day2Class = active;
        break;
      default:
        break;
    }

    switch (Number(this.operationDate.charAt(2))) {
      case 0:
        day3Class = deactive;
        break;
      case 1:
        day3Class = active;
        break;
      default:
        break;
    }

    switch (Number(this.operationDate.charAt(3))) {
      case 0:
        day4Class = deactive;
        break;
      case 1:
        day4Class = active;
        break;
      default:
        break;
    }

    switch (Number(this.operationDate.charAt(4))) {
      case 0:
        day5Class = deactive;
        break;
      case 1:
        day5Class = active;
        break;
      default:
        break;
    }

    switch (Number(this.operationDate.charAt(5))) {
      case 0:
        day6Class = deactive;
        break;
      case 1:
        day6Class = active;
        break;
      default:
        break;
    }

    switch (Number(this.operationDate.charAt(6))) {
      case 0:
        day7Class = deactive;
        break;
      case 1:
        day7Class = active;
        break;
      default:
        break;
    }

    const days = `
      <button id = "sd-item-days-1-${this.mapIndex}" class="${day1Class}">월</button>
      <button id = "sd-item-days-2-${this.mapIndex}" class="${day2Class}">화</button>
      <button id = "sd-item-days-3-${this.mapIndex}" class="${day3Class}">수</button>
      <button id = "sd-item-days-4-${this.mapIndex}" class="${day4Class}">목</button>
      <button id = "sd-item-days-5-${this.mapIndex}" class="${day5Class}">금</button>
      <button id = "sd-item-days-6-${this.mapIndex}" class="${day6Class}">토</button>
      <button id = "sd-item-days-7-${this.mapIndex}" class="${day7Class}">일</button> 
    `;
    return days;
  }
  assembleHtmlTimes() {
    const startTimeId = 'sd-item-set-start-time-' + this.mapIndex.toString();
    const endTimeId = 'sd-item-set-end-time-' + this.mapIndex.toString();
    const eachRunTimeId =
      'sd-item-set-each-device-run-time-' + this.mapIndex.toString();
    const totalRunTimeId =
      'sd-item-device-run-time-' + this.mapIndex.toString();

    const strtTime = fillZero(4, this.startTime.toString());
    const strtTimeHour = strtTime.substring(0, 2);
    const strtTimeMin = strtTime.substring(2, 4);

    const endTime = fillZero(4, this.endTime.toString());
    const endTimeHour = endTime.substring(0, 2);
    const endTimeMin = endTime.substring(2, 4);

    const operationTime = fillZero(4, this.operationTime.toString());
    const operationTimeHour = operationTime.substring(0, 2);
    const operationTimeMin = operationTime.substring(2, 4);

    const totalMin = parseInt(operationTimeMin) * this.deviceNum;
    // console.log(totalMin);
    const addHour = parseInt(totalMin / 60);
    // console.log(addHour);
    const remainderMin = totalMin % 60;
    // console.log(remainderMin);
    const finalMin = fillZero(2, remainderMin.toString());
    // console.log(finalMin);
    const totalHour = parseInt(operationTimeHour) * 6 + addHour;
    const finalHour = totalHour.toString();
    // console.log(finalHour);

    const totalOperationTimeHour = finalHour;
    const totalOperationTimeMin = finalMin;

    const times = `
      <div class="sd-item-set-start-time">
        <h3>시작시간</h3>
        <input
          id="${startTimeId}"
          type="text"
          class="form-control js-time-picker"
          value="${strtTimeHour}:${strtTimeMin}"
        />
      </div>
      <div class="sd-item-set-end-time">
        <h3>종료시간</h3>
        <input
          id="${endTimeId}"
          type="text"
          class="form-control js-time-picker"
          value="${endTimeHour}:${endTimeMin}"
        />
      </div>
      <div class="sd-item-set-each-device-run-time">
        <h3>가동시간</h3>
        <input
          id="${eachRunTimeId}"
          type="text"
          class="form-control js-time-picker"
          value="${operationTimeHour}:${operationTimeMin}"
        />
      </div>
      <div class="sd-item-device-run-time" id = "sd-item-device-run-time-${this.mapIndex}">
        <h3>총 가동시간</h3>
        <input
          id="${totalRunTimeId}"
          type="text"
          class="form-control js-time-picker"
          value="${totalOperationTimeHour}:${totalOperationTimeMin}"
          disabled
        />
      </div>
    `;
    return times;
  }
  assembleHtml() {
    const title = this.assembleHtmltitle();
    const device = this.assembleHtmlDevice();
    const days = this.assembleHtmlDays();
    const times = this.assembleHtmlTimes();

    const article = `
    <article class="sd-list-item" id="sd-list-item=${this.mapIndex}">
          <header class="sd-item-title">
            <img src="assets/img/timer-30-green-ico.webp" alt="" />
            ${title}
          </header>
          <div class="sd-item-device-box">
            ${device}
          </div>
          <div class="sd-list-item-inner-01">
            <div class="sd-item-days-box">
              ${days}
            </div>
            <div class="sd-item-times-box">
              ${times}
            </div>
          </div>
        </article>
    `;
    return article;
  }

  /**
   * TurnOn Schedule Operation at Mon
   * @date 2021-08-21
   * @returns {any}
   */
  turnOnMon() {
    this.mon = '1';
  }
  /**
   * TurnOn Schedule Operation at Tue
   * @date 2021-08-21
   * @returns {any}
   */
  turnOnTue() {
    this.tue = '1';
  }
  /**
   * TurnOn Schedule Operation at Wen
   * @date 2021-08-21
   * @returns {any}
   */
  turnOnWen() {
    this.wen = '1';
  }
  /**
   * TurnOn Schedule Operation at Thr
   * @date 2021-08-21
   * @returns {any}
   */
  turnOnThr() {
    this.thr = '1';
  }
  /**
   * TurnOn Schedule Operation at Fri
   * @date 2021-08-21
   * @returns {any}
   */
  turnOnFri() {
    this.fri = '1';
  }
  /**
   * TurnOn Schedule Operation at Sat
   * @date 2021-08-21
   * @returns {any}
   */
  turnOnSat() {
    this.set = '1';
  }
  /**
   * TurnOn Schedule Operation at Sun
   * @date 2021-08-21
   * @returns {any}
   */
  turnOnSun() {
    this.sun = '1';
  }
  /**
   * TurnOff Schedule Operation at Mon
   * @date 2021-08-21
   * @returns {any}
   */
  turnOffMon() {
    this.mon = '0';
  }
  /**
   * TurnOff Schedule Operation at Mon
   * @date 2021-08-21
   * @returns {any}
   */
  turnOffTue() {
    this.tue = '0';
  }
  /**
   * TurnOff Schedule Operation at Wen
   * @date 2021-08-21
   * @returns {any}
   */
  turnOffWen() {
    this.tue = '0';
  }
  /**
   * TurnOff Schedule Operation at Thr
   * @date 2021-08-21
   * @returns {any}
   */
  turnOffThr() {
    this.thr = '0';
  }
  /**
   * TurnOff Schedule Operation at Fri
   * @date 2021-08-21
   * @returns {any}
   */
  turnOffFri() {
    this.fri = '0';
  }
  /**
   * TurnOff Schedule Operation at Sat
   * @date 2021-08-21
   * @returns {any}
   */
  turnOffSat() {
    this.set = '0';
  }
  /**
   * TurnOff Schedule Operation at Sun
   * @date 2021-08-21
   * @returns {any}
   */
  turnOffSun() {
    this.sun = '0';
  }
}

/* Application Main :
 */

// 1. 로컬에 저장된 토큰을 체크 (없을경우 로그인으로 이동)
checkToken();
// 2. 유저의 토큰을 가져옴
const userToken = localStorage.getItem('access_token');
// 3. 통신을 위한 Farota Axios를 생성
const farota = getFarotaAxios();
// farota.defaults.baseURL = 'http://127.0.0.1:5500';
// farota.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
// farota.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

// . 페이지 초기화 처리
window.addEventListener('DOMContentLoaded', async function () {
  // 1. 스케줄 리스트를 불러옵니다.
  // 1.1. API 호출을 통해 스케줄 리스트 조회
  const [{ data: schedulerList }] = await Promise.all([
    farota.get(getURIReadSchedulerList(), {}),
  ]);
  // console.log(`SUCCESS : schedulerList `);
  // console.dir(schedulerList);

  for (let i = 0; i < schedulerList.result.length; i++) {
    // 스케줄러 인포메이션 받아오기
    let tempIdx = schedulerList.result[i].scheduler_idx;
    let uriReadSchedulerInfo = getURIReadSchedulerInfo(tempIdx);
    let [{ data: schedulerInfo }] = await Promise.all([
      farota.get(uriReadSchedulerInfo, {}),
    ]);
    // console.log(`SUCCESS : schedulerInfo ${i}`);
    // console.dir(schedulerInfo);
    // 정보들 바탕으로 스케줄 인스턴스 생성하기
    SCHEDULES[i] = new Schedule(
      schedulerList.result[i].scheduler_idx,
      schedulerList.result[i].scheduler_name,
      schedulerList.result[i].status,
      i,
      schedulerList.result[i].operation_date,
      schedulerList.result[i].start_time,
      schedulerList.result[i].end_time,
      schedulerList.result[i].operation_time,
      schedulerInfo.result['device-scheduler-list']
    );
    // console.log(`SUCCESS : schedule instunces ${i}`);
    // console.dir(SCHEDULES[i]);
    // console.dir(SCHEDULES[i].startTime);
    SCHEDULE_HTMLS = SCHEDULE_HTMLS + SCHEDULES[i].assembleHtml();
  }
  // HTML 세팅하기
  document.getElementById('sd-list-section').innerHTML = SCHEDULE_HTMLS;

  // console.log(waitCreat_operationDate_mon);
  // 스케줄 생성하기
  // Schedule.createScheduler('LAST', '1010101', [1, 2, 3], 1, 2359, 5);
  // 스케줄 지우기
  // console.dir(SCHEDULES[0].deleteSchduler());
});

async function loadScheduleList() {
  const [{ data: schedulerList }] = await Promise.all([
    farota.get(getURIReadSchedulerList(), {}),
  ]);
  for (let i = 0; i < schedulerList.result.length; i++) {
    // 스케줄러 인포메이션 받아오기
    let tempIdx = schedulerList.result[i].scheduler_idx;
    let uriReadSchedulerInfo = getURIReadSchedulerInfo(tempIdx);
    let [{ data: schedulerInfo }] = await Promise.all([
      farota.get(uriReadSchedulerInfo, {}),
    ]);
    // console.log(`SUCCESS : schedulerInfo ${i}`);
    // console.dir(schedulerInfo);
    // 정보들 바탕으로 스케줄 인스턴스 생성하기
    SCHEDULES[i] = new Schedule(
      schedulerList.result[i].scheduler_idx,
      schedulerList.result[i].scheduler_name,
      schedulerList.result[i].status,
      i,
      schedulerList.result[i].operation_date,
      schedulerList.result[i].start_time,
      schedulerList.result[i].end_time,
      schedulerList.result[i].operation_time,
      schedulerInfo.result['device-scheduler-list']
    );
    console.log(`SUCCESS : schedule instunces ${i}`);
    console.dir(SCHEDULES[i]);
    console.dir(SCHEDULES[i].startTime);
    SCHEDULE_HTMLS = SCHEDULE_HTMLS + SCHEDULES[i].assembleHtml();
  }
  // HTML 세팅하기
  location.reload();
  // document.getElementById('sd-list-section').innerText = '';
  // document.getElementById('sd-list-section').innerHTML = SCHEDULE_HTMLS;
}
// 생성
function createNewScheduler() {
  let schedulerName = waitCreat_schedulerName;
  let operationDate =
    waitCreat_operationDate_mon +
    waitCreat_operationDate_twe +
    waitCreat_operationDate_wen +
    waitCreat_operationDate_thr +
    waitCreat_operationDate_fri +
    waitCreat_operationDate_set +
    waitCreat_operationDate_sun;
  let deviceList = [];
  let spkArray = [];
  spkArray.push(
    waitCreat_spk_1,
    waitCreat_spk_2,
    waitCreat_spk_3,
    waitCreat_spk_4,
    waitCreat_spk_5,
    waitCreat_spk_6
  );
  for (let i = 0; i < spkArray.length; i++) {
    const spk = spkArray[i];
    let deviceIdx = i + 1;
    switch (spk) {
      case '1':
        deviceList.push(deviceIdx);
        break;
      case '0':
        break;
    }
  }

  let startTime = parseInt(waitCreat_startTime);
  let endTime = parseInt(waitCreat_endTime);
  let operationTime = parseInt(waitCreat_operationTime);
  Schedule.createScheduler(
    schedulerName,
    operationDate,
    deviceList,
    startTime,
    endTime,
    operationTime
  );
  console.log('스케줄 생성 성공!');
  console.log('schedulerName');
  console.log(schedulerName);
  console.log('operationDate');
  console.log(operationDate);
  console.log('deviceList');
  console.dir(deviceList);
  console.log('startTime');
  console.log(waitCreat_startTime);
  console.log(startTime);
  console.log('endTime');
  console.log(endTime);
  console.log('operationTime');
  console.log(operationTime);
  alert('스케줄 생성이 완료되었습니다');
  loadScheduleList();
}

function updateSchedulerDevice(this_id) {
  const active = 'sd-item-devices-on';
  const deactive = 'sd-item-devices-off';

  const compId = this_id;
  const deviceNum = compId.substring(12, 14);
  const mapIndex = compId.charAt(compId.length - 1);

  // const comp = document.getElementById(`${compId}`)
  // const compCass = comp.

  if (deviceNum) {
  } else {
  }
  switch (deviceNum) {
    case 1:
      SCHEDULES[mapIndex].statusDevice1 = 1;
      SCHEDULES[mapIndex].updateScheduler();
      loadScheduleList();
      break;

    default:
      break;
  }
}

function deleteScheduler(this_id) {
  const compId = this_id;
  const mapIndex = compId.charAt(compId.length - 1);
  SCHEDULES[mapIndex].deleteScheduler();
  alert('스케줄이 삭제되었습니다');
  loadScheduleList();
}

function startScheduler(this_id) {
  const compId = this_id;
  const mapIndex = compId.charAt(compId.length - 1);
  console.log(mapIndex);
  SCHEDULES[mapIndex].startScheduler();
  alert('스케줄이 시작되었습니다');
  loadScheduleList();
}

function stopScheduler(this_id) {
  const compId = this_id;
  const mapIndex = compId.charAt(compId.length - 1);
  console.log(mapIndex);
  SCHEDULES[mapIndex].stopScheduler();
  alert('스케줄이 정지되었습니다');
  loadScheduleList();
}
// 시작시간 선택
// 종료시간 선택
// 장치 당 가동시간 선택
// 총 가동시간 표현
// 장치 선택
// 커밋
// console.dir(SCHEDULES[1]);
