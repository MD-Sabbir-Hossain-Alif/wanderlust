"use client";
import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";
import { LuTrash2 } from "react-icons/lu";
const CancelAlert = ({ booked }) => {
    const { _id } = booked;
    const handleCancel = async () => {
        const res = await fetch(`http://localhost:8000/my-booking/${_id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await res.json();
        // console.log(data);
        redirect("/my-bookings");
    };
    return (
        <AlertDialog>
            <Button
                variant="outline"
                className="text-red-500 border-red-500 rounded-none"
            >
                <LuTrash2 className="w-5 h-5" />
                Cancel
            </Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-100">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>
                                Delete permanently?
                            </AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently delete{" "}
                                <strong>My Booking</strong> and all of its data.
                                This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button
                                onClick={handleCancel}
                                slot="close"
                                variant="danger"
                            >
                                Delete Booking
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
};

export default CancelAlert;
