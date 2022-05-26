const PORT = process.env.REACT_APP_PORT || 5000;
const SERVER_HOST = "localhost";
export const api = `http://${SERVER_HOST}:${PORT}`;

//hardcoded token for testing
export const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiMmYwN2IxNDgtZWZhNy00OTE3LWExMTctNWViZjBmZGVhNTM2IiwiZW1haWwiOiJyb2xmQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJFRQWm9uNjk3MHJ1cUQyMG1lSlRBUE9mdUwvcnc0Tkl5R2dkaGtSVk8wOVlBVkdHck9HVmwuIiwiZmlyc3ROYW1lIjoidGVzdCIsImxhc3ROYW1lIjoidGVzdCIsImlzX2FkbWluIjpmYWxzZSwicmVmcmVzaF90b2tlbiI6ImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUoxYzJWeUlqcDdJbWxrSWpvaU1tWXdOMkl4TkRndFpXWmhOeTAwT1RFM0xXRXhNVGN0TldWaVpqQm1aR1ZoTlRNMklpd2laVzFoYVd3aU9pSnliMnhtUUdkdFlXbHNMbU52YlNJc0luQmhjM04zYjNKa0lqb2lKREppSkRFd0pGUlFXbTl1TmprM01ISjFjVVF5TUcxbFNsUkJVRTltZFV3dmNuYzBUa2w1UjJka2FHdFNWazh3T1ZsQlZrZEhjazlIVm13dUlpd2labWx5YzNST1lXMWxJam9pZEdWemRDSXNJbXhoYzNST1lXMWxJam9pZEdWemRDSXNJbWx6WDJGa2JXbHVJanBtWVd4elpTd2ljbVZtY21WemFGOTBiMnRsYmlJNkltVjVTbWhpUjJOcFQybEtTVlY2U1RGT2FVbHpTVzVTTldORFNUWkphM0JZVmtOS09TNWxlVW94WXpKV2VVbHFjRGRKYld4clNXcHZhVTF0V1hkT01rbDRUa1JuZEZwWFdtaE9lVEF3VDFSRk0weFhSWGhOVkdOMFRsZFdhVnBxUW0xYVIxWm9UbFJOTWtscGQybGFWekZvWVZkM2FVOXBTbmxpTW5odFVVZGtkRmxYYkhOTWJVNTJZbE5KYzBsdVFtaGpNMDR6WWpOS2EwbHFiMmxLUkVwcFNrUkZkMHBHVWxGWGJUbDFUbXByTTAxSVNqRmpWVkY1VFVjeGJGTnNVa0pWUlRsdFpGVjNkbU51WXpCVWEydzFVakprYTJGSGRGTldhemgzVDFac1FsWnJaRWhqYXpsSVZtMTNkVWxwZDJsYWJXeDVZek5TVDFsWE1XeEphbTlwWkVkV2VtUkRTWE5KYlhob1l6TlNUMWxYTVd4SmFtOXBaRWRXZW1SRFNYTkpiV3g2V0RKR2EySlhiSFZKYW5CdFdWZDRlbHBUZDJsamJWWnRZMjFXZW1GR09UQmlNblJzWW1sSk5rbHRWalZUYldocFVqSk9jRlF5YkV0VFZsWTJVMVJHVDJGVmJIcFRWelZUVGxkT1JGTlVXa3BoTTBKWlZtdE9TMDlUTld4bFZXOTRXWHBLVjJWVmJIRmpSR1JLWWxkNGNsTlhjSFpoVlRGMFYxaGtUMDFyYkRSVWExSnVaRVp3V0ZkdGFFOWxWRUYzVkRGU1JrMHdlRmhTV0doT1ZrZE9NRlJzWkZkaFZuQnhVVzB4WVZJeFdtOVViRkpPVFd0c2NHUXliR0ZXZWtadldWWmtNMkZWT1hCVGJteHBUVzVvZEZWVlpHdGtSbXhZWWtoT1RXSlZOVEpaYkU1S1l6QnNkVkZ0YUdwTk1EUjZXV3BPUzJFd2JIRmlNbXhMVWtWd2NGTnJVa1prTUhCSFZXeEdXR0pVYkRGVWJYQnlUVEF4U1ZOcVJtcFdWa1kxVkZWamVHSkdUbk5WYTBwV1VsUnNkRnBHVmpOa2JVNTFXWHBDVldFeWR6RlZha3ByWVRKR1NHUkdUbGRoZW1nelZERmFjMUZzV25KYVJXaHFZWHBzU1ZadE1UTmtWV3h3WkRKc1lXSlhlRFZaZWs1VFZERnNXRTFYZUVwaGJUbHdXa1ZrVjJWdFVrUlRXRTVLWWxob2IxbDZUbE5VTVd4WVRWZDRTbUZ0T1hCYVJXUlhaVzFTUkZOWVRrcGlWM2cyVjBSS1IyRXlTbGhpU0ZaS1lXNUNkRmRXWkRSbGJIQlVaREpzYW1KV1duUlpNakZYWlcxR1IwOVVRbWxOYmxKeldXMXNTazVyYkhSV2FsWlVZbGRvY0ZWcVNrOWpSbEY1WWtWMFZGWnNXVEpWTVZKSFZESkdWbUpJY0ZSV2VsWlVWR3hrVDFKR1RsVlhhM0JvVFRCS1dsWnRkRTlUTURsVVRsZDRiRlpYT1RSWFdIQkxWakpXVm1KSVJtcFNSMUpMV1d4a05HTnNUbGhqU0Zwb1ZsUkdNRll4YUd0VU1ERnlZa1JTVldFeFNuVmFSVnAzVjBaa2RHRkZPV3hXUlVZelZrUkdVMUpyTUhkbFJtaFRWMGRvVDFaclpFOU5SbEp6V2taa2FGWnVRbmhWVnpCNFdWWkplRmR0T1ZWaVJrcFBWRmQwYzJOSFVYbGlSMFpYWld0YWRsZFdXbXROTWtaV1QxaENWR0p0ZUhCVVZ6VnZaRVpXVmxwSGRHdFNiWGhaV1d0b1QxUlhTbFpPVkVwYVlrVTFTMWw2UW5Oa1ZrWjBZVWR3VGsxRVVqWlhWM0JQVXpKRmQySklSbWxOYlhoTVZXdFdkMk5HVG5KVmExcHJUVWhDU0ZaWGVFZFhSMHBWWWtSR1ZXSllRbmxVVkVGNFUxWk9jVkp0Y0ZkV2Exa3hWa1pXYW1WSFNrZFViazVXWVRCd1YxVnNVbk5rUm5CSFZtcE9hMkpWTlRGWFdIQkRWbGRGZVdSNlJsWmhhM0J5V1ZSS1IxTkhVa2RVYkdSb1pXMW5lbFpFUm1Gak1VWnpWMjVLWVZKWGFIRlpXSEJ6VTFaYWRFMVVUbXRXVjNoM1drUktjMWxYU2xobFJGWmFaV3MxVkZaRVJuTlhSVEZZWlVWd2FHSlViSGRYYTFaclZqSldkRlZyVWxSWFJUVkxXV3hvYjJJeGJEWlViRTVWVFZkNFdWUldaRFJUYlVaMFQxaENZVkpYVWxoYVZ6RlRVa1pPV1ZScmNHbFdNMmN5VmpCU1MxSXlSWGxUYkdocFUwWmFTMWxYTlVOa1JtUlhXa1JTYkdKSVFsVmFSRXB6WVcxS1YxZHVVbHBOYWtaWVdsY3hSMUl3T1ZWUmJXeE9ZbXhLZWxkWE1YTlRhelZ5WWtoU1YyRnNXbFZaYkdSdlkwWldjVk5yT1dwU2JFWTFXV3RXTUZaR1duTlhWRXBXVFZaS1NGWkVTa2RXYlVwSlkwWlNWMlZzV2xWV1IzaHJWREZLUjFSc1ZsaGhNMEp2VkZSQ1MxZHNXblJrUlRsVVRVUnNWVlJzWkRSaVJscFlUMVJTV0ZkSVFreFdha3BYVmpGU2MyRkdXbGROYm1oU1YxWmFWMk13TlZkYVNGSnFVbFZ3VDFSV1pEUmxSbFp6Vld0T1ZsSnJXVEpWYlRWUFYwZEtWVkpyWkZWV1JVa3dWbXhhVjFaV1duSk9WbVJUVFVSU00xWnFSbUZWTVVwMFZtdGFUMVpHV2s5VmExWmhZVVphY1ZGdVpHdFNiRXBYVjJ0a1IyRkZNVmxSYkd4V1lrWktTRlpITVZkak1rcEpVV3hXVTFaVVZrMVhWRUpoWXpGa1YxWnNhR2xTYTBwdldWUkdWMDVXV2tobFJrNVZZbFphZVZSc1VtRlpWMVp5VjJ4Q1ZtRXhjSHBhVjNoUFYwVXhWMXBGT1ZOTlJGWkdWbFJHVTFsV1VuTlhhMlJvVFRKb1ZsWXdhRU5WTVZKWVkzcEdVMVl3V1RKVlYzTTFZVmRHY2xKcVJsZFdiVko2V1RKNFZtVkhUa1pOVlRscFVtNUNVMVpFUWxaT1YwcFdUbFphYVZKV2NHOVpXSEJHVFVad1ZsVnJXbXROVjNoNVZsZDRSMkZXU2taV2FsWmFZVEpTY2xWc1pGZFNNa28yVkd4U1UxSnVRalpXVjNoclV6RlNkRlJ1VGxOaVZFWmhXbFpXYzJWc1RsaE5WVGxzVm01Q1dWVnRjRU5aVmxsNFUydE9ZVkpWTlV0VWJYUnpZMVpPV1ZwRk5XaGhNbmQzVmtaV1UxWnRVa1pOV0VaVllrWmFUMVpyVlhkTmJGSldWV3RhVDJGNlJsWlZWbWhYVkd4S1JsSnFUbGROYlhoTFdYcENjMlJXV25WYVIwWlRUVVpzTTFZeWVHdFZNVVowVld0U1ZGWkdjRXRaVjNSelRURlNXR05GY0d0U1ZFWkdWbXhvVTFSdFJuTlRiRnBWVmxaS2NWUnRjekZTVjBZMlYyczFVMUp0ZDNoV1JsWlRVVzFSZUZwSVFsUmhiWGhPVlZSQ2QyUXhaRmRoUmtwb1ZsUnNlRlZzVWt0VU1WcEdUVlJhVlUxR1NrdGFSRUUxVmxkRmVsUnJjR2xXYkd0M1YxUkNUMU5yTlhKTlZsWllWa1ZhVDFwWGVFWmxWbEYzVld4S1QxWlViRnBVVlUweFZHeFNSbFJ1VW10aVdGSlJWRlZvZDFSVmVGbGhSMnhvWld0dmVWZHFUazVrTVZKSVlVaHdVMDF1UVRGV1JXUjJaREZrV1dOR1FtRldNMUl5VjFSQ1YwNXRTa1pVYTBwaFVrVlplbE5YYkROaFZtdDZVMjE0V2xkR1NuTlhhMVpIVFVWc2NXSXliRTVoYTBZMVZGZHJkMlF3TlZSTlNHeE9UVlpHTkZSWWNIWmtNREZWWWpOb1RsRjZVak5VVlZKRFdWVnNjR1F5Ykd0WFJVcHlWMVpvVTJKR2NFWlNha0pLWVcwNWNGUlhjRUpsVlRGd1RVaGtUMVY2UWpWVWExcFNaREE1UldKNlFsQlNSemswVkRGTk1HUXdNVVZSYlVaS1ltcENlbE5YTVhOaFIxSkVVMVJhVGxaR2EzaFVXSEJPVGtVMVZWTllaRkJSTTJSd1YyeG9iMlF3YkhGaU0yaFBZV3hXTmxSclVtcGxSVFZ4VVZSU2JWVlROVmRoYmtKRldXdGtlR050TlRKWmJsSkpXak5PVFdGc2NFMVNhekZ4VW0wNVJVNUVTbFpOU0Vrd1UxZHpkR1ZHWXpSU2FtUllVVEpHVGtscGQybFpNMHBzV1ZoU2JGcEZSakJKYW05cFRXcEJlVTFwTUhkT1V6QjVUVEZSZUUxNmIzZE5WRzk0VFVNMGQwMUVRbUZKYVhkcFpGaENhMWxZVW14YVJVWXdTV3B2YVUxcVFYbE5hVEIzVGxNd2VVNUdVWGRQVkc4d1RVUnZkMDlETkhkTlJFSmhTVzR3YzBsdGJHaGtRMGsyVFZSWk1VMTZVWGRQUkZWNVQwTjNhVnBZYUhkSmFtOTRUbXBWZWs1RWF6QlBWRWswWmxFdVoyTTFSWHByYW14S1pIUXpjSEEwV1dsalkxZFhkME54ZUd0NlNteFllWEExTlVNME5qQlVZMjVsYnlJc0ltTnlaV0YwWldSQmRDSTZJakl3TWpJdE1EVXRNak5VTVRNNk1ERTZNVEF1TURBd1dpSXNJblZ3WkdGMFpXUkJkQ0k2SWpJd01qSXRNRFV0TWpSVU1UWTZNRGc2TkRndU1EQXdXaUo5TENKcFlYUWlPakUyTlRNME56VXhPVE1zSW1WNGNDSTZNVFkxTXpVMk1UVTVNMzAuRGpoMTNLcDZhalhRbWhPRG9pZHhFaXdyY3FfeU5EdmlXZ0tlLXJsVVlmUSIsImNyZWF0ZWRBdCI6IjIwMjItMDUtMjNUMTM6MDE6MTAuMDAwWiIsInVwZGF0ZWRBdCI6IjIwMjItMDUtMjVUMTA6Mzk6NTMuMDAwWiJ9LCJpYXQiOjE2NTM0Nzg3NTMsImV4cCI6MTY1MzU2NTE1M30.ex4NaidDYkaC9G_flBBjWNSv_5xyFuJXvN8bvx4M2Fo";

export const ACCESSTOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiMmYwN2IxNDgtZWZhNy00OTE3LWExMTctNWViZjBmZGVhNTM2IiwiZW1haWwiOiJyb2xmQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJFRQWm9uNjk3MHJ1cUQyMG1lSlRBUE9mdUwvcnc0Tkl5R2dkaGtSVk8wOVlBVkdHck9HVmwuIiwiZmlyc3ROYW1lIjoidGVzdCIsImxhc3ROYW1lIjoidGVzdCIsImlzX2FkbWluIjpmYWxzZSwicmVmcmVzaF90b2tlbiI6ImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUoxYzJWeUlqcDdJbWxrSWpvaU1tWXdOMkl4TkRndFpXWmhOeTAwT1RFM0xXRXhNVGN0TldWaVpqQm1aR1ZoTlRNMklpd2laVzFoYVd3aU9pSnliMnhtUUdkdFlXbHNMbU52YlNJc0luQmhjM04zYjNKa0lqb2lKREppSkRFd0pGUlFXbTl1TmprM01ISjFjVVF5TUcxbFNsUkJVRTltZFV3dmNuYzBUa2w1UjJka2FHdFNWazh3T1ZsQlZrZEhjazlIVm13dUlpd2labWx5YzNST1lXMWxJam9pZEdWemRDSXNJbXhoYzNST1lXMWxJam9pZEdWemRDSXNJbWx6WDJGa2JXbHVJanBtWVd4elpTd2ljbVZtY21WemFGOTBiMnRsYmlJNkltVjVTbWhpUjJOcFQybEtTVlY2U1RGT2FVbHpTVzVTTldORFNUWkphM0JZVmtOS09TNWxlVW94WXpKV2VVbHFjRGRKYld4clNXcHZhVTF0V1hkT01rbDRUa1JuZEZwWFdtaE9lVEF3VDFSRk0weFhSWGhOVkdOMFRsZFdhVnBxUW0xYVIxWm9UbFJOTWtscGQybGFWekZvWVZkM2FVOXBTbmxpTW5odFVVZGtkRmxYYkhOTWJVNTJZbE5KYzBsdVFtaGpNMDR6WWpOS2EwbHFiMmxLUkVwcFNrUkZkMHBHVWxGWGJUbDFUbXByTTAxSVNqRmpWVkY1VFVjeGJGTnNVa0pWUlRsdFpGVjNkbU51WXpCVWEydzFVakprYTJGSGRGTldhemgzVDFac1FsWnJaRWhqYXpsSVZtMTNkVWxwZDJsYWJXeDVZek5TVDFsWE1XeEphbTlwWkVkV2VtUkRTWE5KYlhob1l6TlNUMWxYTVd4SmFtOXBaRWRXZW1SRFNYTkpiV3g2V0RKR2EySlhiSFZKYW5CdFdWZDRlbHBUZDJsamJWWnRZMjFXZW1GR09UQmlNblJzWW1sSk5rbHRWalZUYldocFVqSk9jRlF5YkV0VFZsWTJVMVJHVDJGVmJIcFRWelZUVGxkT1JGTlVXa3BoTTBKWlZtdE9TMDlUTld4bFZXOTRXWHBLVjJWVmJIRmpSR1JLWWxkNGNsTlhjSFpoVlRGMFYxaGtUMDFyYkRSVWExSnVaRVp3V0ZkdGFFOWxWRUYzVkRGU1JrMHdlRmhTV0doT1ZrZE9NRlJzWkZkaFZuQnhVVzB4WVZJeFdtOVViRkpPVFd0c2NHUXliR0ZXZWtadldWWmtNMkZWT1hCVGJteHBUVzVvZEZWVlpHdGtSbXhZWWtoT1RXSlZOVEpaYkU1S1l6QnNkVkZ0YUdwTk1EUjZXV3BPUzJFd2JIRmlNbXhMVWtWd2NGTnJVa1prTUhCSFZXeEdXR0pVYkRGVWJYQnlUVEF4U1ZOcVJtcFdWa1kxVkZWamVHSkdUbk5WYTBwV1VsUnNkRnBHVmpOa2JVNTFXWHBDVldFeWR6RlZha3ByWVRKR1NHUkdUbGRoZW1nelZERmFjMUZzV25KYVJXaHFZWHBzU1ZadE1UTmtWV3h3WkRKc1lXSlhlRFZaZWs1VFZERnNXRTFYZUVwaGJUbHdXa1ZrVjJWdFVrUlRXRTVLWWxob2IxbDZUbE5VTVd4WVRWZDRTbUZ0T1hCYVJXUlhaVzFTUkZOWVRrcGlWM2cyVjBSS1IyRXlTbGhpU0ZaS1lXNUNkRmRXWkRSbGJIQlVaREpzYW1KV1duUlpNakZYWlcxR1IwOVVRbWxOYmxKeldXMXNTazVyYkhSV2FsWlVZbGRvY0ZWcVNrOWpSbEY1WWtWMFZGWnNXVEpWTVZKSFZESkdWbUpJY0ZSV2VsWlVWR3hrVDFKR1RsVlhhM0JvVFRCS1dsWnRkRTlUTURsVVRsZDRiRlpYT1RSWFdIQkxWakpXVjFSc2FGWldNbmhSV1ZaV2MwNVdaSFJqUlVwT1RWZDRlRlZzVWtOVlJrWTJVbTVPV0dKVVJrZFVWRUkwVmxaV1ZWWnJOVmRTTURSM1ZqRmFVMUp0VmtaT1ZGWk9Va1ZhYUZacVFuZGtSbEpXV2tkR2FFMVlRbGxWYkZKSFZHMVdjMkpJUWxWU1ZUVk1XVEJhYzFkV1ZsaGlSa0pvWVRGV05WWkhlRk5VYlZaeVRsUmFZV1ZyV2xCVmExcHpaV3hPV0UxV1pFOVNNRFZGVlRGU1lWUnNXa2RoTTJoVlYwaENVMVJYY3pGU1YwWTJVV3M1YVdGclJqRldWbVJ6WTJ4VmVHTkZNVTlpUm5CU1ZEQlZOV0pWTlZaaVJWcG9ZWHBGTUZwVlVrWmtNV3h5Vld4R2FWSkZWalZaYTJSclVsZFdSMko2VGxSU1JuQjZWV3hrUzFSdFRuTlNiVEZhWlZWc2VsTlhNVTlsVm5CWVVtcENZVll4U2tOYVJVNUtUbXRzY1ZOWVpFNWhhMnd3VkZWU1ZtUkZNWEZVYkZaT1ZrVXdNbFJWVWtaT2F6RlZVVmhXVGxKRlJqTldNbXhLWXpCc2RWWnVaR0ZTTUZsM1YyeGtVMUZ0VWtSVFZGcEtZV3RzTTFSWGNFcGtSVEZGVmxoU1RtRnNTbFpVVlZKcVRtczFSV0Y2V2s1U1Jtd3hWRlZTUW1ReFpIQlRhbXhOVVRCd2QxZFdhRkpoVlRseFVsUktUMVpGTVRaVU1GSktaREE1VldFelRrcGlWbGt3V1RCT1NrNXJNVlZYVkVaT1pXeEZlVlF3VWxKT1ZUbFpUVU0xVGxSRlRuUmtiWFJRVFVod1RVeFlhR2xoZWtveVdqTk5kMVJIYUhwU01uQTFWRWR2ZDFkWWNGQmFWM1IyV1RCV05tSkZUa0phUkVZelNXbDNhVmt6U214WldGSnNXa1ZHTUVscWIybE5ha0Y1VFdrd2QwNVRNSGxOTVZGNFRYcHZkMDFVYjNoTlF6UjNUVVJDWVVscGQybGtXRUpyV1ZoU2JGcEZSakJKYW05cFRXcEJlVTFwTUhkT1V6QjVUa1pSZDA5RWJ6QlBSRzk0VDFNMGQwMUVRbUZKYmpCelNXMXNhR1JEU1RaTlZGa3hUWHBOTkU1VVNYZFBRM2RwV2xob2QwbHFiM2hPYWxWNlRrUmplRTVxUVRSbVVTNVdhbkJFWWtkeGNtNTJZblJJWjNOTWFscE1SazFxUm05RU5ESlZNSEkwU1dzdGVGYzRSamRYUTJGTklpd2lZM0psWVhSbFpFRjBJam9pTWpBeU1pMHdOUzB5TTFReE16b3dNVG94TUM0d01EQmFJaXdpZFhCa1lYUmxaRUYwSWpvaU1qQXlNaTB3TlMweU5GUXdPVG8wTURvd09DNHdNREJhSW4wc0ltbGhkQ0k2TVRZMU16UXdPRFV5T0N3aVpYaHdJam94TmpVek5EazBPVEk0ZlEuZ2M1RXpramxKZHQzcHA0WWljY1dXd0NxeGt6SmxYeXA1NUM0NjBUY25lbyIsImNyZWF0ZWRBdCI6IjIwMjItMDUtMjNUMTM6MDE6MTAuMDAwWiIsInVwZGF0ZWRBdCI6IjIwMjItMDUtMjRUMTY6MDg6NDguMDAwWiJ9LCJpYXQiOjE2NTM0NzUxOTMsImV4cCI6MTY1MzU2MTU5M30.Djh13Kp6ajXQmhODoidxEiwrcq_yNDviWgKe-rlUYfQ";