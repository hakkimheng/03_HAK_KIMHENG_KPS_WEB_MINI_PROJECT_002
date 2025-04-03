import { Controller, useForm } from "react-hook-form";
import { Input } from "./ui/input";
import DropDownTagComponent from "./DropDownTagComponent";
import { DatePickerComponent } from "./DatePickerComponent";
import { Button } from "./ui/button";

function TaskForm({ onSubmit, defaultValues = {}, buttonLabel = "Submit" }) {
  const { handleSubmit, register, control } = useForm({ defaultValues });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 pb-5">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <label htmlFor="title" className="font-bold">Title</label>
        <Input type="text" placeholder="Enter task title" {...register("taskTitle")} />
      </div>

      {/* Description */}
      <div className="flex flex-col gap-2">
        <label htmlFor="description" className="font-bold">Description</label>
        <Input type="text" placeholder="Enter task description" {...register("taskDetails")} />
      </div>

      {/* Tags */}
      <div className="flex flex-col gap-2">
        <label htmlFor="tags" className="font-bold">Tags</label>
        <div>
        <Controller
          name="tags"
          control={control}
          render={({ field }) => (
            <DropDownTagComponent value={field.value} onChange={field.onChange} />
          )}
        />
        </div>
      </div>

      {/* Date Picker */}
      <div className="flex flex-col gap-2">
        <label htmlFor="date" className="font-bold">Date</label>
        <Controller
          name="endDate"
          control={control}
          render={({ field }) => (
            <DatePickerComponent date={field.value} setDate={field.onChange} />
          )}
        />
      </div>

      {/* Submit Button */}
      <Button type="submit" className="bg-blue-600 mt-10 font-bold hover:bg-blue-900 w-full text-white">
        {buttonLabel}
      </Button>
    </form>
  );
}

export default TaskForm;