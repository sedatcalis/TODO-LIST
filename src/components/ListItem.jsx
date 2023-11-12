import axios from "axios";
import { types } from "./constants";
import formatDate from "./formatDate";
import { useState, useRef } from "react";

const ListItem = ({ setTodos, todo }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const titleRef =useRef()
  const selectRef = useRef()


  // !silme işlemi
  const handleDelete = () => {
    // veri tabanında silme
    axios
      .delete(`http://localhost:3000/todos/${todo.id}`)
      // istek başarılı olursa arayüzü  güncelle
      // arayüzde silme işlemi
      .then(() => setTodos((todos) => todos.filter((i) => i.id !== todo.id)));
  };

  //! güncelleme
  const handleEdit = () => {
    // input değerlerine erişme
    const newValues = {
      title: titleRef.current.value,
      status: selectRef.current.value,
    };

    //  api'yi güncelle
    axios
      .patch(`http://localhost:3000/todos/${todo.id}`, newValues)
      // state'i güncelle
      .then(() => {
        // todo objesini güncelle
        const updated = { ...todo, ...newValues };
        // state'de tutğumuz dizideki eski obje yerine updated'ı ekle
        setTodos((todos) =>
          todos.map((i) => (i.id === updated.id ? updated : i))
        );
      });

    setIsEditMode(false);
  };

  return (
    
      <li className="relative px-3 py-3 list-group-item d-flex justify-content-between align-items-center">
        <div>
         {/* checked ile todonon check değerini isdone'a bağladık. Tamamlandıysa otomatik tikli geliyo */}
        {/* default checked vs checked. checked'da sabit değer gelir değiştiremem. anca json serverdaki veri
        değerini değiştirebilirim.  defaultta gelen değer varsayılanda gelir ama değiştirebiliriz */}
      
        {/* todo statuste bir eleman varsa rengini ver yoksa verme - select kısmı*/}
        {isEditMode ? (
          <select ref={selectRef} defaultValue={todo.status}>
            <option value="important">Önemli</option>
            <option value="daily">Günlük</option>
            <option value="job">İş</option>
          </select>
        ) : (
          <span className={`badge ${types[todo.status]?.color}`}>
            {todo.status}
          </span>
        )}
        </div>

        {isEditMode ? (
          <input ref={titleRef} defaultValue={todo.title} type="text" />
        ) : (
          <span>{todo.title}</span>
        )}

        <div className="btn-group">
          {isEditMode ? (
            <>
              <button onClick={handleEdit} className="btn btn-sm btn-success">Kayıt</button>
              <button onClick={()=> setIsEditMode(false)} className="btn btn-sm btn-secondary">İptal</button>
            </>
          ) : (
            <>
              <button
                onClick={() => setIsEditMode(true)}
                className="btn btn-sm btn-primary"
              >
                Edit
              </button>
              <button onClick={handleDelete} className="btn btn-sm btn-danger">
                Del
              </button>
            </>
          )}
        </div>

        <span className="tarih">{formatDate(todo.date)}</span>
      </li>
    
  );
};

export default ListItem;
