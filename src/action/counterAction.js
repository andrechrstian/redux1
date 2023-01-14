export const  tambahAngka = (total) => (dispatch) => {
    let newTotal = total + 1;

    dispatch({
      type: "Tambah",
      payload: newTotal,
    })
    
  }

export const kurangAngka = (total) => (dispatch) => {
    let newTotal = total - 1;

    dispatch({
      type: "Kurang",
      payload: newTotal,
    })
  }