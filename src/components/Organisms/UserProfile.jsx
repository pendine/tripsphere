import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiCog, BiSolidUser } from 'react-icons/bi';
import InputField from '../Atoms/InputField';
import { useAuthForm } from '../../hooks/useAuthForm';
import { useVerifyPassword } from '../../hooks/useUserData';
import Loading from '../Molecules/Loading';
import Modal from '../Molecules/Modal';
import ToastMessage from '../Atoms/ToastMessage';
import InputErrorMessage from '../Atoms/InputErrorMessage';
import useAuthStore from '../../stores/useAuthStore';

const UserProfile = () => {
  const navigate = useNavigate();
  const [state, dispatch] = useAuthForm();
  const [showPassword, setShowPassword] = useState(false);
  const { mutate: verify } = useVerifyPassword();
  const { user } = useAuthStore();

  // 본인 인증 폼 제출
  const handleVerify = () => {
    verify(state.password, {
      onSuccess: () => {
        showToast('success', '본인 인증 성공했습니다.');
        navigate('/profile');
      },
      onError: () => {
        showToast('error', '본인 인증 실패했습니다.');
      },
    });

    dispatch({ type: 'SET_PASSWORD', payload: '' });
  };

  const [toast, setToast] = useState(null);

  // 토스트
  const showToast = (type, message) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <>
      <div className="flex px-4 mb-8">
        {/* 프로필사진 */}
        <div className="avatar">
          <div className="w-[80px] h-[80px] rounded-lg overflow-hidden">
            {user?.profile_image ? (
              <img
                className="w-[100%] h-[100%] object-cover"
                src={user?.profile_image}
                alt={user?.username}
              />
            ) : (
              <div className="flex justify-center items-center w-[100%] h-[100%] bg-gray-100 dark:bg-base-200">
                <BiSolidUser
                  size={40}
                  className="text-gray-300 "
                />
              </div>
            )}
          </div>
        </div>

        {/* 이름 등 정보 */}
        <div className="ml-4 flex flex-1 flex-col">
          <div>
            <div className="flex justify-between text-base font-medium ">
              <h3>
                <a href="#">
                  <strong>{user?.username}님</strong>
                </a>
              </h3>
            </div>
            <div className="mt-1 text-sm text-gray-500">{user?.nickname}</div>
          </div>
        </div>

        {/* 개인정보 수정 설정 버튼 */}
        <Modal
          buttonTitle={<BiCog size={24} />}
          modalId="verification"
          title="본인 인증">
          <div className="py-4">
            <div className="mb-4">
              개인정보 변경 전 본인 인증을 위해 비밀번호를 입력해주세요.
            </div>

            {/* 비밀번호 */}
            <div>
              <InputField
                label="비밀번호"
                type="password"
                value={state.password}
                placeholder={state.placeholder.password}
                onChange={(e) =>
                  dispatch({ type: 'SET_PASSWORD', payload: e.target.value })
                }
                showPassword={showPassword}
                onTogglePassword={() => setShowPassword(!showPassword)}
              />

              <InputErrorMessage error={state.errors.password} />
            </div>
          </div>

          {/* 버튼 영역 */}
          <div className="modal-action">
            <form method="dialog">
              <button
                className="btn"
                onClick={handleVerify}>
                확인
              </button>
            </form>
          </div>
        </Modal>
      </div>

      {/* 토스트 메시지 */}
      {toast && (
        <ToastMessage
          toast={toast}
          setToast={setToast}
        />
      )}
    </>
  );
};

export default UserProfile;
