import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTasks } from "../../features/subprojects/subprojectSlice";
import { SampleProject } from "../sampleproject/SampleProject";
import { Upload } from "../upload/Upload";
import { Spinner } from "@chakra-ui/react";

export const ProjectScreen = () => {
  const { tasks, loading } = useSelector((state) => state.subproject);
  const params = useParams();
  const { projectId } = params;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasks(projectId));
  }, []);

  return (
    <div>
      {loading ? (
        <div style={{ marginTop: "30vh", textAlign:'center' }}>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="primary"
            size="xl"
          />
        </div>
      ) : tasks.length ? (
        <SampleProject tasks={tasks} />
      ) : (
        <Upload />
      )}
    </div>
  );
};
